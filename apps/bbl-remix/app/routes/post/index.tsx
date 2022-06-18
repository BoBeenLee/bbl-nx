import _ from 'lodash';
import { Link, useLoaderData } from '@remix-run/react';
import styled from 'styled-components';
import { ClientOnly } from 'remix-utils';

import { interpret, assign } from 'xstate';
import { waitFor } from 'xstate/lib/waitFor';
import { postServiceWithConfig } from '~/machines/post-service-machine';
import PostClient from '~/components/post.client';

const Root = styled.div`
  padding-top: 20px;
`;

const Loading = styled.div`
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

export const loader = async () => {
  const state = await makeMDPostState();
  return JSON.stringify(state);
};

export default function Posts() {
  const postMachineState = useLoaderData<string>();

  return (
    <Root>
      <ClientOnly fallback={<Loading>Loading...</Loading>}>
        {() => <PostClient postMachineState={postMachineState} />}
      </ClientOnly>
    </Root>
  );
}
