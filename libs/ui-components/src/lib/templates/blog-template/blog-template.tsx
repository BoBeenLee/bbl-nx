import { PageTitle } from '../../atoms';
import BlogCard from '../../molecules/blog-card/blog-card';
import { PostItem } from '@bbl-nx/interfaces';

export interface BlogTemplateProps {
  allPosts: PostItem[];
}

export function BlogTemplate(props: BlogTemplateProps) {
  const { allPosts } = props;

  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto mb-8 border-gray-200 sm:mb-12 dark:border-gray-700">
      <PageTitle className="pb-6">All Posts</PageTitle>
      <div className="w-full space-y-12">
        {allPosts.map((item) => {
          const { id, title, createdAt, url, isExternal } = item;
          return (
            <div key={id}>
              <a
                href={url}
                {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <BlogCard title={title} createdAt={createdAt} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogTemplate;
