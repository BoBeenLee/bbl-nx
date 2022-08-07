import { nav } from '@bbl-nx/constants';
import { NavFooter, Nav } from '../../organisms';

export interface LayoutTemplateProps {
  children: React.ReactNode;
}

export function LayoutTemplate(props: LayoutTemplateProps) {
  const { children } = props;

  return (
    <div className="flex flex-col flex-1 bg-white dark:bg-gray-900">
      <Nav data={nav} />
      <main className="flex flex-col justify-center flex-1 px-8 bg-white dark:bg-gray-900">
        {children}
      </main>
      <NavFooter data={nav} />
    </div>
  );
}

export default LayoutTemplate;
