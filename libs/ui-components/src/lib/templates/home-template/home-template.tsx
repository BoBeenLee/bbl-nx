import { Nav, NavProps } from '../../molecules/nav/nav';
import { nav } from '@bbl-nx/constants';
import { useMemo } from 'react';

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
      <main className="flex flex-col justify-center bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200 dark:border-gray-700">
          main
        </div>
      </main>
    </div>
  );
}

export default HomeTemplate;
