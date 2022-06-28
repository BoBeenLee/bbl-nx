import { Nav, NavProps } from '../../molecules/nav/nav';
import { nav } from '@bbl-nx/constants';
import { useMemo } from 'react';
import NavFooter from '../../molecules/nav-footer/nav-footer';
import HomeCard from '../../molecules/home-card/home-card';

export interface HomeTemplateProps {
  asPath: string;
  onNavigate: NavProps['onNavigate'];
}

export function HomeTemplate(props: HomeTemplateProps) {
  const { asPath, onNavigate } = props;

  const navItems = useMemo(() => {
    return nav.map((item) => ({ ...item, isActive: item.href === asPath }));
  }, [asPath]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Nav data={navItems} onNavigate={onNavigate} />
      <main className="flex flex-col justify-center py-16 bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto border-gray-200 sm:pb-16 dark:border-gray-700">
          <HomeCard
            name={'BoBeen Lee'}
            roleName={'Frontend Developer'}
            description={'I love coding'}
          />
        </div>
      </main>
      <NavFooter data={navItems} onNavigate={onNavigate} />
    </div>
  );
}

export default HomeTemplate;
