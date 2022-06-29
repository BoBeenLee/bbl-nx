import _ from 'lodash';
import React, { useCallback } from 'react';
import { GetStaticProps } from 'next';

import { BlogTemplate } from '@bbl-nx/ui-components';
import { interpret } from 'xstate';
import { waitFor } from 'xstate/lib/waitFor';
import { postServiceWithConfig } from '../../machines/post-service-machine';
import { useRouter } from 'next/router';
import { PostItem } from '@bbl-nx/machines';

interface PostPageProps {
  allPosts: PostItem[];
}

const makePostState = async () => {
  const postService = interpret(postServiceWithConfig);
  postService.start();
  const doneState = await waitFor(
    postService,
    (state) =>
      state.matches('Done'),
    {
      timeout: 10_000,
    }
  );
  return doneState;
};

export const getStaticProps: GetStaticProps = async () => {
  const postMachineState = await makePostState();

  return {
    props: {
      allPosts: postMachineState.context.posts,
    },
  };
};

const PostPage = (props: PostPageProps) => {
  const { allPosts } = props;
  const router = useRouter();

  const postsByDESC = _.orderBy(allPosts, ['createdAt'], ['desc']);
  const filterPublished = postsByDESC.filter((item) => item.published);

  const onNavigate = useCallback(
    ({ href }: { href: string }) => {
      router.push(href);
    },
    [router]
  );

  return (
    <BlogTemplate
      allPosts={filterPublished}
      asPath={router.asPath}
      onNavigate={onNavigate}
    />
  );
};

export default PostPage;
