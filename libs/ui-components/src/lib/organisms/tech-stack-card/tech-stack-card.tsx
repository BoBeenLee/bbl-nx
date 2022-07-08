import cn from 'classnames';

export interface TechStackCardProps {
  className?: string;
  groupName: string;
  items: string[];
}

export function TechStackCard(props: TechStackCardProps) {
  const { className, groupName, items } = props;
  return (
    <div className={cn(className, 'flex flex-col items-start space-y-2')}>
      <div className="font-medium text-gray-900 truncate dark:text-gray-100">
        {groupName}
      </div>
      <div className="flex flex-row flex-wrap items-center gap-2">
        {items.map((item) => {
          return (
            <div key={`${groupName}${item}`} className="text-sm text-gray-500">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechStackCard;
