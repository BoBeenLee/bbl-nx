import cn from 'classnames';

export interface ActivityCardProps {
  className?: string;
  title: React.ReactNode;
  caption: React.ReactNode;
}

export function ActivityCard(props: ActivityCardProps) {
  const { className, title, caption } = props;
  return (
    <div
      className={cn(
        className,
        'flex flex-col flex-1 sm:flex-row sm:justify-between sm:space-y-0 space-y-2'
      )}
    >
      <div className="font-medium text-gray-900 truncate dark:text-gray-100">
        {title}
      </div>
      <div className="flex items-center">
        <p className="text-sm text-gray-500">{caption}</p>
      </div>
    </div>
  );
}

export default ActivityCard;
