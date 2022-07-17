import Layout from '../../components/layout';
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts, PostItem, getPostById } from '../../libs/post';
import { BlogIdTemplate } from '@bbl-nx/ui-components';

const BlogByIdPage = (props: PostItem) => {
  const { slug, frontmatter, content } = props;

  return (
    <Layout>
      <BlogIdTemplate
        id={slug}
        title={frontmatter.title}
        createdAt={frontmatter.date}
        content={content}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<PostItem, { id: string }> = async ({
  params,
}) => {
  const post = await getPostById(params?.id ?? '');
  
  return {
    props: post,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          id: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default BlogByIdPage;
