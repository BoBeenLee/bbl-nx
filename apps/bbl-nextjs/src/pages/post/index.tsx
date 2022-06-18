import _ from 'lodash';
import React, { Suspense } from 'react';
import { GetStaticProps } from 'next';
import styled from 'styled-components';

import { Layout, Loading } from '@bbl-nx/ui-components';
import { interpret } from 'xstate';
import { waitFor } from 'xstate/lib/waitFor';
import { postServiceWithConfig } from '../../machines/post-service-machine';
import { useQuery } from 'react-query';

import { PostCard } from '@bbl-nx/ui-components';
import { useMachine } from '@xstate/react';
import { fetchTistories } from '../../apis/post';

interface PostPageProps {
  postMachineState: string;
}

const Root = styled.div`
  padding-top: 20px;
  min-height: 100vh;
`;

const PageLoading = styled(Loading)`
  height: 100vh;
`;

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

const PostPage = (props: PostPageProps) => {
  const { postMachineState } = props;
  const [state, __] = useMachine(postServiceWithConfig, {
    state: JSON.parse(postMachineState),
  });
  const { data = [] } = useQuery('fetchTistories', fetchTistories, {
    suspense: true,
  });
  const posts = [...state.context.posts, ...data];
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
  return (
    <Layout>
      <Suspense fallback={<PageLoading size={100} />}>{page}</Suspense>
    </Layout>
  );
};

export default PostPage;
