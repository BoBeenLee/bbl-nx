import _ from 'lodash';
import React from 'react';
import { GetStaticProps } from 'next';

import Layout from '../../components/layout';
import { BlogTemplate } from '@bbl-nx/ui-components';
import { interpret } from 'xstate';
import { waitFor } from 'xstate/lib/waitFor';
import { postServiceWithConfig } from '../../machines/post-service-machine';
import { PostItem } from '@bbl-nx/interfaces';

interface PostPageProps {
  allPosts: PostItem[];
}

const makePostState = async () => {
  const postService = interpret(postServiceWithConfig);
  postService.start();
  const doneState = await waitFor(
    postService,
    (state) => state.matches('Done'),
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

const BlogPage = (props: PostPageProps) => {
  const { allPosts } = props;

  const postsByDESC = _.orderBy(allPosts, ['createdAt'], ['desc']);
  const filterPublished = postsByDESC.filter((item) => item.published);

  return (
    <Layout>
      <BlogTemplate allPosts={filterPublished} />
    </Layout>
  );
};

export default BlogPage;
