// Install gray-matter and date-fns
import matter from 'gray-matter';
import fs from 'fs';
import { join } from 'path';
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
  // 디렉터리의 모든 항목을 포스트로 간주한다. .md 이외의 파일이나 하위 폴더가 있으면
  // getPostBySlug 가 던지고 목록 전체가 빈 배열로 끝난다.
  const slugs = fs.readdirSync(getPostsDirectory());
  const posts = slugs.map((slug) => getPostBySlug(slug));
  return posts;
};
