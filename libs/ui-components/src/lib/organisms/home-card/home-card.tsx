import { Avatar } from '../../atoms';

export interface HomeCardProps {
  name: string;
  roleName: string;
  description: string;
}

export function HomeCard(props: HomeCardProps) {
  const { name, roleName, description } = props;
  return (
    <div className="flex flex-col-reverse items-start sm:flex-row">
      <div className="flex flex-col pr-8">
        <div className="mb-1 text-3xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">
          {name}
        </div>
        <div className="mb-4 text-gray-700 sm:pl-1 dark:text-gray-200">
          {roleName}
        </div>
        <div className="mb-16 text-gray-600 sm:pl-1 dark:text-gray-400">
          {description}
        </div>
      </div>
      <div className="relative mb-8 mr-auto sm:mb-0">
        <Avatar
          className="w-[81px] h-[81px] sm:w-[176px] sm:h-[176px]"
          alt={'profile'}
        />
      </div>
    </div>
  );
}

export default HomeCard;
