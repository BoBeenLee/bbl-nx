import React from 'react';
import { getAllPosts, getPostById } from '../../../src/libs/post';
import { BlogIdTemplate } from '@bbl-nx/features/blog/components/templates/blog-[id]-template/blog-[id]-template';

interface Props {
  params: { id: string };
}

const BlogByIdPage = async (props: Props) => {
  const { params } = props;
  const post = await getPostById(params?.id ?? '');
  const { slug, frontmatter, content } = post;
  return (
    <BlogIdTemplate
      id={slug}
      title={frontmatter.title}
      createdAt={frontmatter.date}
      content={content}
    />
  );
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => {
    return {
      id: post.slug,
    };
  });
}

export default BlogByIdPage;
