import { Nav } from '../../organisms/nav/nav';
import { NavFooter } from '../../organisms/nav-footer/nav-footer';

export interface LayoutTemplateProps {
  children: React.ReactNode;
}

export function LayoutTemplate(props: LayoutTemplateProps) {
  const { children } = props;

  return (
    <div className="flex flex-col flex-1 bg-white dark:bg-gray-900">
      <Nav asPath="" />
      <main className="flex flex-col justify-center flex-1 px-8 bg-white dark:bg-gray-900">
        {children}
      </main>
      <NavFooter />
    </div>
  );
}

export default LayoutTemplate;
