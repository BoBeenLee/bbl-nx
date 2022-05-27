import path from 'path';
// Note: netlify doesn't support `import fs from "fs/promises";`
// import { promises as fs } from "fs";
import fs from 'fs/promises';
import parseFrontMatter from 'front-matter';
import { marked } from 'marked';

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

export type PostMarkdownAttributes = {
  title: string;
  path: string;
  date: string;
  published: boolean;
};

// Relative to the server output not the source!
// i.e. netlify/functions/server/build/index.js
const postsPath = path.join(__dirname, '../', 'posts');

export const getPostBySlug = async (slug: string): Promise<PostItem> => {
  const realSlug = slug.replace(/\.md$/, '');
  const file = await fs.readFile(path.join(postsPath, `${realSlug}.md`), 'utf8');
  const { attributes, body } = parseFrontMatter<PostMarkdownAttributes>(
    file.toString()
  );
  const html = marked(body);
  return {
    slug: realSlug,
    frontmatter: {
      title: attributes.title,
      published: attributes.published,
      date: attributes.date,
      path: attributes.path,
    },
    content: html ?? "",
  };
}

export const getAllPosts = async () => {
  const dir = await fs.readdir(postsPath);
  return await Promise.all(
    dir.map((slug) => getPostBySlug(slug))
  );
}
