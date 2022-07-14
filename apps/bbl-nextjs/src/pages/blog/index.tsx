import _ from 'lodash';
import React from 'react';
import { GetStaticProps } from 'next';

import Layout from '../../components/layout';
import { BlogTemplate } from '@bbl-nx/ui-components';
import { interpret } from 'xstate';
import { waitFor } from 'xstate/lib/waitFor';
import { blogServiceWithConfig } from '../../machines/blog-service-machine';
import { BlogItem } from '@bbl-nx/interfaces';

interface BlogPageProps {
  allBlogs: BlogItem[];
}

const makeBlogState = async () => {
  const blogService = interpret(blogServiceWithConfig);
  blogService.start();
  const doneState = await waitFor(
    blogService,
    (state) => state.matches('Done'),
    {
      timeout: 30_000,
    }
  );
  return doneState;
};

export const getStaticProps: GetStaticProps = async () => {
  const blogMachineState = await makeBlogState();

  return {
    props: {
      allBlogs: blogMachineState.context.blogs,
    },
  };
};

const BlogPage = (props: BlogPageProps) => {
  const { allBlogs } = props;
  const blogsByDESC = _.orderBy(allBlogs, ['createdAt'], ['desc']);
  const filterPublished = blogsByDESC.filter((item) => item.published);

  return (
    <Layout>
      <BlogTemplate allBlogs={filterPublished} />
    </Layout>
  );
};

export default BlogPage;