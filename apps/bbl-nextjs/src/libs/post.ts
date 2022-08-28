// Install gray-matter and date-fns
import matter from 'gray-matter';
import fs from 'fs';
import { join } from 'path';
import { getHostname, isBrowser } from '@bbl-nx/utils';
import axios from 'axios';
import remark from 'remark';
import html from 'remark-html';

export type PostItem = {
  slug: string;
  frontmatter: {
    title: string;
    published: boolean;
    date: string;
    path: string;
  };
  content: string;
};

// Add markdown files in `src/posts`
const getPostsDirectory = () => join(process.cwd(), 'posts');

export function getPostBySlug(slug: string): PostItem {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(getPostsDirectory(), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: data as any,
    content,
  };
}

export const getPostById = async (slug: string) => {
  if (isBrowser) {
    const response = await axios.get<PostItem[]>(
      `${getHostname()}/api/posts`
    );
    const post = response.data?.[0];
    if (!post) {
      throw new Error('Not Found DummyData');
    }
    const markdown = await remark()
      .use(html)
      .process(post.content || '');
    const content = markdown.toString();
    return {
      ...post,
      content,
    };
  }
  const post = getPostBySlug(slug ?? '');
  const markdown = await remark()
    .use(html)
    .process(post.content || '');
  const content = markdown.toString();

  return {
    ...post,
    content,
  };
};

export const getAllPosts = async () => {
  if (isBrowser) {
    const response = await axios.get<PostItem[]>(
      `${getHostname()}/api/posts`
    );
    return response.data;
  }
  const slugs = fs.readdirSync(getPostsDirectory());
  const posts = slugs.map((slug) => getPostBySlug(slug));
  return posts;
};
