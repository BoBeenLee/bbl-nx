import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';

import { getPostBySlug, PostItem } from '../../libs/post.server';
import { PostTemplate } from '@bbl-nx/ui-components';

export const loader: LoaderFunction = async ({ params }) => {
  const post = await getPostBySlug(params.slug ?? '');
  return post;
};

export default function PostSlug() {
  const post = useLoaderData<PostItem>();
  const { slug, frontmatter, content } = post;
  return (
    <PostTemplate
      data={{
        markdownRemark: {
          id: slug,
          html: content,
          fields: {
            slug,
          },
          frontmatter,
        },
      }}
    />
  );
}
