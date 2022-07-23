import React from 'react';
import { GetStaticProps } from 'next';

import Layout from '../../components/layout';
import { BlogTemplate, BlogItem } from '@bbl-nx/features';
import { interpret } from 'xstate';
import { waitFor } from 'xstate/lib/waitFor';
import { blogServiceWithConfig } from '../../machines/blog-service-machine';
import { defaultDESC, sortBy } from '@bbl-nx/utils';

export interface BlogPageProps {
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

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const blogMachineState = await makeBlogState();

  return {
    props: {
      allBlogs: blogMachineState.context.blogs,
    },
  };
};

const BlogPage = (props: BlogPageProps) => {
  const { allBlogs } = props;
  const blogsByDESC = sortBy(allBlogs, 'createdAt', defaultDESC);
  const filterPublished = blogsByDESC.filter((item) => item.published);

  return (
    <Layout>
      <BlogTemplate allBlogs={filterPublished} />
    </Layout>
  );
};

export default BlogPage;
