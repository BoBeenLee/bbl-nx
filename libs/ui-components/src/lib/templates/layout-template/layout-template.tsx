import { Nav, NavProps } from '../../molecules/nav/nav';
import { nav } from '@bbl-nx/constants';
import { useMemo } from 'react';
import NavFooter from '../../molecules/nav-footer/nav-footer';

export interface LayoutTemplateProps {
  asPath: string;
  onNavigate: NavProps['onNavigate'];
  children: React.ReactNode;
}

export function LayoutTemplate(props: LayoutTemplateProps) {
  const { asPath, onNavigate, children } = props;

  const navItems = useMemo(() => {
    return nav.map((item) => ({ ...item, isActive: item.href === asPath }));
  }, [asPath]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Nav data={navItems} onNavigate={onNavigate} />
      <main className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900">
        {children}
      </main>
      <NavFooter data={navItems} onNavigate={onNavigate} />
    </div>
  );
}

export default LayoutTemplate;
