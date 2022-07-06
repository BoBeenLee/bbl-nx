import { Nav, NavProps } from '../../organisms/nav/nav';
import { nav } from '@bbl-nx/constants';
import { useMemo } from 'react';
import NavFooter from '../../organisms/nav-footer/nav-footer';

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
    <div className="flex flex-col flex-1 bg-white dark:bg-gray-900">
      <Nav data={navItems} onNavigate={onNavigate} />
      <main className="flex flex-col justify-center flex-1 px-8 bg-white dark:bg-gray-900">
        {children}
      </main>
      <NavFooter data={navItems} onNavigate={onNavigate} />
    </div>
  );
}

export default LayoutTemplate;
