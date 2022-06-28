import { images } from '@bbl-nx/images';
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
        <div className="mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {name}
        </div>
        <div className="mb-4 text-gray-700 dark:text-gray-200">{roleName}</div>
        <div className="mb-16 text-gray-600 dark:text-gray-400">
          {description}
        </div>
      </div>
      <div className="w-[81px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
        <Avatar className="w-full h-full md:p-4" alt={'profile'} />
      </div>
    </div>
  );
}

export default HomeCard;
