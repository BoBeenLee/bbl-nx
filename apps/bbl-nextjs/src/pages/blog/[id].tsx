// Install remark and remark-html
import remark from 'remark';
import html from 'remark-html';
import React, { useCallback } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostBySlug, getAllPosts, PostItem } from '../../libs/post';
import { useRouter } from 'next/router';
import { BlogIdTemplate } from '@bbl-nx/ui-components';

const BlogByIdPage = (props: PostItem) => {
  const router = useRouter();
  const { slug, frontmatter, content } = props;

  const onNavigate = useCallback(
    ({ href }: { href: string }) => {
      router.push(href);
    },
    [router]
  );

  return (
    <BlogIdTemplate
      asPath={router.asPath}
      onNavigate={onNavigate}
      id={slug}
      title={frontmatter.title}
      createdAt={frontmatter.date}
      content={content}
    />
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
