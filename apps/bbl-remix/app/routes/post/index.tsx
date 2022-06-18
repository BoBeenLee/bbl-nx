import _ from 'lodash';
import { Link, useLoaderData } from '@remix-run/react';
import styled from 'styled-components';

   
import { getAllPosts, PostItem as MDPostItem } from '~/libs/post.server';
import { getFeednamiTistories, TistoryItem } from '~/libs/tistory';
import { PostCard } from '@bbl-nx/ui-components';
import { postMachine } from '@bbl-nx/machines';
import { interpret, assign } from 'xstate';
import { waitFor } from 'xstate/lib/waitFor';
import { useMachine } from '@xstate/react';
import { useEffect } from "react";

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
    fetchTistories: async (__, ___) => {
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

export const loader = async () => {
  const state = await makeMDPostState();
  return JSON.stringify(state);
};

export default function Posts() {
  const postMachineState = useLoaderData<string>();
  const [state, send] = useMachine(postServiceWithConfig, {
    state: JSON.parse(postMachineState),
  });

  useEffect(() => {
    send('FETCH');
  }, [send]);

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
}
