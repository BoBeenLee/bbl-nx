import cn from 'classnames';
import { ALink, ExternalLink } from '@bbl-nx/ui-components';
import { BlogItem } from '../../../interfaces';
import BlogCard from '../blog-card/blog-card';

export interface BlogsProps {
  className?: string;
  blogs: BlogItem[];
}

export function Blogs(props: BlogsProps) {
  const { className, blogs } = props;

  return (
    <div className={cn(className, 'space-y-12')}>
      {blogs.length === 0 ? (
        <div className="mb-4 text-gray-600 dark:text-gray-400">
          No posts found.
        </div>
      ) : null}
      {blogs.map((item) => {
        const { id, title, createdAt, url, isExternal } = item;
        if (isExternal) {
          return (
            <div key={id}>
              <ExternalLink href={url}>
                <BlogCard title={title} createdAt={createdAt} />
              </ExternalLink>
            </div>
          );
        }
        return (
          <div key={id}>
            <ALink urlPath={'/blog/[id]'} urlPathValues={{ id: id }}>
              <BlogCard title={title} createdAt={createdAt} />
            </ALink>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
