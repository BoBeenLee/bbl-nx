import React, { Suspense } from 'react';
import { GetStaticProps } from 'next';
import styled from 'styled-components';

import { Layout, Loading } from '@bbl-nx/ui-components';
import { interpret } from 'xstate';
import { waitFor } from 'xstate/lib/waitFor';
import { postServiceWithConfig } from '../../machines/post-service-machine';
import dynamic from 'next/dynamic';

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

const ClientPostRoute = dynamic(
  () => import('../../routes/post/index.client'),
  {
    ssr: false,
  }
);

const PostPage = (props: PostPageProps) => {
  return (
    <Root>
      <ClientPostRoute {...props} />
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
