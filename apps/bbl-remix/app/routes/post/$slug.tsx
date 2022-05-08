import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import { getPost, PostItem } from '@bbl-remix/post';
import { PostTemplate } from '@bbl-nx/ui-components';

export const loader: LoaderFunction = async ({ params }) => {
  return getPost(params.slug ?? '');
};

export default function PostSlug() {
  const post = useLoaderData<PostItem>();
  const { slug, title, html } = post;
  return (
    <PostTemplate
      data={{
        markdownRemark: {
          id: slug,
          html: html ?? '',
          fields: {
            slug,
          },
          frontmatter: {
            title,
          },
        },
      }}
    />
  );
}
