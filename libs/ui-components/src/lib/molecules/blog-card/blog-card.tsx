import { DATE_TIME_FORMAT5, toDateTimeText } from '@bbl-nx/utils';
import cn from 'classnames';

export interface BlogCardProps {
  className?: string;
  title: string;
  createdAt: string;
  summary?: string;
}

export function BlogCard(props: BlogCardProps) {
  const { className, title, createdAt, summary } = props;
  return (
    <div className={cn(className, 'flex flex-col')}>
      <div className="flex flex-row items-start justify-between">
        <h4 className="mb-0 text-lg font-medium text-gray-900 b-2 md:text-xl dark:text-gray-100">
          {title}
        </h4>
        <p className="mb-0 text-sm text-gray-500">
          {toDateTimeText(createdAt, DATE_TIME_FORMAT5)}
        </p>
      </div>
      {summary ? (
        <div className="mb-2 text-gray-600 dark:text-gray-400">{summary}</div>
      ) : null}
    </div>
  );
}

export default BlogCard;
