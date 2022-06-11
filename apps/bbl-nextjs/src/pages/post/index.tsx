import _ from 'lodash';
import React, { Suspense, useEffect } from 'react';
import { GetStaticProps } from 'next';
import styled from 'styled-components';

import { PostCard, Layout } from '@bbl-nx/ui-components';
import { TistoryItem } from '../../libs/tistory';
import { getAllPosts, PostItem as MDPostItem } from '../../libs/post';
import { getFeednamiTistories } from '../../libs/tistory';
import { postMachine, PostItem } from '@bbl-nx/machines';
import { interpret, assign, Subscription } from 'xstate';
import { waitFor } from 'xstate/lib/waitFor';
import { useMachine } from '@xstate/react';

interface PostPageProps {
  postMachineState: string;
}

const Root = styled.div`
  padding-top: 20px;
`;

const Loading = styled.div`
  height: 100vh;
`;

const postServiceWithConfig = postMachine.withConfig({
  actions: {
    updatePostsContext: assign((ctx, event) => {
      return {
        posts: [...ctx.posts, ...event.data],
      };
    }),
  },
  services: {
    fetchTistories: async (ctx, event) => {
      const response = await getFeednamiTistories(
        'http://cultist-tp.tistory.com/rss'
      );
      const data = mapTistoryToPosts(response);
      return data;
    },
    fetchMD: async () => {
      const response = await getAllPosts();
      const data = mapRemarkToPosts(response);
      return data;
    },
  },
});

const makeMDPostState = async () => {
  const postService = interpret(postServiceWithConfig);
  postService.start();
  const doneState = await waitFor(
    postService,
    (state) => state.matches('FetchingPosts.FetchingMD.Done'),
    {
      timeout: 10_000,
    }
  );
  return doneState;
};

export const getStaticProps: GetStaticProps = async () => {
  const postMachineState = await makeMDPostState();

  return {
    props: {
      postMachineState: JSON.stringify(postMachineState),
    },
  };
};

const mapRemarkToPosts = (allMarkdownRemark: MDPostItem[]) => {
  const posts = allMarkdownRemark;
  return _.map(
    posts,
    ({ slug, frontmatter: { title, date, path, published } }) => {
      return {
        createdAt: date,
        id: slug,
        title,
        url: path ?? '',
        published,
        isExternal: false,
      };
    }
  );
};

const mapTistoryToPosts = (tistories: TistoryItem[]) => {
  return _.map(tistories, (item) => ({
    createdAt: item.date,
    id: item.guid,
    title: item.title,
    url: item.link,
    published: true,
    isExternal: true,
  }));
};

const PostPage = (props: PostPageProps) => {
  const { postMachineState } = props;
  const [state, send, service] = useMachine(postServiceWithConfig, {
    state: JSON.parse(postMachineState),
  });

  useEffect(() => {
    send('FETCH');
  }, []);

  if (!state.matches('Done')) {
    return <Loading>{'Loading...'}</Loading>;
  }
  const posts = state.context.posts;
  const postsByDESC = _.orderBy(posts, ['date'], ['desc']);
  const filterPublished = postsByDESC.filter((item) => item.published);

  return (
    <Root>
      {_.map(filterPublished, (item) => {
        const { title, createdAt, url, isExternal } = item;
        return (
          <PostCard
            key={item.id}
            title={title}
            {...(isExternal ? { externalUrl: url } : { url })}
            createdAt={createdAt}
          />
        );
      })}
    </Root>
  );
};

PostPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PostPage;
