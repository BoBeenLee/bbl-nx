import { home } from '@bbl-nx/constants';
import HomeCard from '../../organisms/home-card/home-card';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HomeTemplateProps {}

export function HomeTemplate() {
  const { name, roleName, description } = home;
  return (
    <div className="flex flex-col items-start justify-center max-w-2xl py-12 mx-auto sm:py-20 sm:mb-16">
      <HomeCard name={name} roleName={roleName} description={description} />
    </div>
  );
}

export default HomeTemplate;
