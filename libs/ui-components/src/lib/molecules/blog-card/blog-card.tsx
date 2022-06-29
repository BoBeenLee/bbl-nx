import cn from 'classnames';

export interface BlogCardProps {
  className?: string;
  title: string;
  createdAt: string;
  summary: string;
}

export function BlogCard(props: BlogCardProps) {
  const { className, title, createdAt, summary } = props;
  return (
    <div className={cn(className, 'flex flex-col')}>
      <div className="flex flex-row items-start justify-between mb-2">
        <p className="pr-4 mb-0 font-medium text-gray-900 truncate dark:text-gray-100">
          {title}
        </p>
        <p className="mb-0 text-sm text-gray-500">{createdAt}</p>
      </div>
      <div className="mb-2 text-gray-600 dark:text-gray-400">{summary}</div>
    </div>
  );
}

export default BlogCard;
