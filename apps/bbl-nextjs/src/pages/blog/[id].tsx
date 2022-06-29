import Layout from '../../components/layout';
import remark from 'remark';
import html from 'remark-html';
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostBySlug, getAllPosts, PostItem } from '../../libs/post';
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
  const post = getPostBySlug(params?.id ?? '');
  const markdown = await remark()
    .use(html)
    .process(post.content || '');
  const content = markdown.toString();

  return {
    props: {
      ...post,
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

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
