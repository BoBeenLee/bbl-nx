import path from "path";
// Note: netlify doesn't support `import fs from "fs/promises";`
import { promises as fs } from "fs";
import parseFrontMatter from "front-matter";
import { marked } from "marked";

export type PostItem = {
  slug: string;
  html?: string;
  title: string;
  url: string;
  date: string;
  published: boolean;
};

export type PostMarkdownAttributes = {
  title: string;
  path: string;
  date: string;
  published: boolean;
};

// Relative to the server output not the source!
// i.e. netlify/functions/server/build/index.js
const postsPath = path.join(__dirname, "../../../..", "posts");

export async function getPosts() {
  const dir = await fs.readdir(postsPath);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(postsPath, filename));
      const { attributes } = parseFrontMatter<PostMarkdownAttributes>(
        file.toString()
      );
      return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
        url: attributes.path,
        date: attributes.date,
        published: attributes.published,
      };
    })
  );
}

export async function getPost(slug: string) {
  const filepath = path.join(postsPath, slug + ".md");
  const file = await fs.readFile(filepath);
  const { attributes, body } = parseFrontMatter<PostMarkdownAttributes>(
    file.toString()
  );
  const html = marked(body);
  return {
    slug,
    html,
    title: attributes.title,
    url: attributes.path,
    date: attributes.date,
    published: attributes.published,
  };
}
