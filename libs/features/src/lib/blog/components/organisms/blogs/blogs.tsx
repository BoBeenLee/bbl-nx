import { ALink } from '@bbl-nx/ui-components';
import { BlogItem } from '../../../interfaces';
import BlogCard from '../blog-card/blog-card';

export interface BlogsProps {
  className?: string;
  blogs: BlogItem[];
}

export function Blogs(props: BlogsProps) {
  const { className, blogs } = props;
  return (
    <div className={className}>
      {blogs.map((item) => {
        const { id, title, createdAt, url, isExternal } = item;
        return (
          <div key={id}>
            <ALink href={url} isExternal={isExternal}>
              <BlogCard title={title} createdAt={createdAt} />
            </ALink>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
