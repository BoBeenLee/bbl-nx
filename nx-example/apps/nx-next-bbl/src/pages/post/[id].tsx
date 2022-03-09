// Install remark and remark-html
import remark from "remark";
import html from "remark-html";
import React from "react";
import { getPostBySlug, getAllPosts, PostItem } from "src/configs/post";
import PostTemplate from "src/templates/post";

const PostById = (props: PostItem) => {
  const { slug, frontmatter, content } = props;
  return (
    <PostTemplate
      data={{
        markdownRemark: {
          id: slug,
          html: content,
          fields: {
            slug
          },
          frontmatter
        }
      }}
    />
  );
};

export async function getStaticProps({ params }: any) {
  const post = getPostBySlug(params.id);
  const markdown = await remark()
    .use(html)
    .process(post.content || "");
  const content = markdown.toString();

  return {
    props: {
      ...post,
      content
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map(post => {
      return {
        params: {
          id: post.slug
        }
      };
    }),
    fallback: false
  };
}

export default PostById;
