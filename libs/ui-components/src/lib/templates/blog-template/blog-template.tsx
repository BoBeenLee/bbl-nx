import { PageTitle } from '../../atoms';
import BlogCard from '../../molecules/blog-card/blog-card';
import LayoutTemplate, {
  LayoutTemplateProps,
} from '../layout-template/layout-template';
import { PostItem } from "@bbl-nx/interfaces";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlogTemplateProps
  extends Omit<LayoutTemplateProps, 'children'> {
  allPosts: PostItem[];
}

export function BlogTemplate(props: BlogTemplateProps) {
  const { allPosts, asPath, onNavigate } = props;

  return (
    <LayoutTemplate asPath={asPath} onNavigate={onNavigate}>
      <div className="flex flex-col items-start w-full max-w-2xl mx-auto mb-8 border-gray-200 sm:mb-12 dark:border-gray-700">
        <PageTitle className="pb-6">All Posts</PageTitle>
        <div className="w-full space-y-12">
          {allPosts.map((item) => {
            const { id, title, createdAt, url, isExternal } = item;
            return (
              <div key={id}>
                <a
                  href={url}
                  {...(isExternal
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  <BlogCard title={title} createdAt={createdAt} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </LayoutTemplate>
  );
}

export default BlogTemplate;
