// Install gray-matter and date-fns
import matter from 'gray-matter';
import fs from 'fs';
import { join } from 'path';
import { isBrowser } from "@bbl-nx/utils";

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
const getPostsDirectory = () => join(
  process.cwd(),
  'posts'
);

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

export function getAllPosts() {
  if(isBrowser) {
    return [];
  }
  const slugs = fs.readdirSync(getPostsDirectory());
  const posts = slugs.map((slug) => getPostBySlug(slug));

  return posts;
}
