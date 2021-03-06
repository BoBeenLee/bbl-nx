import { DarkModeButton, NavItem, NavItemProps } from '../../molecules';
import MobileNav from '../mobile-nav/mobile-nav';

export interface NavProps {
  data: Omit<NavItemProps, 'onNavigate'>[];
  onNavigate: ({ href }: { href: string }) => void;
}

export function Nav(props: NavProps) {
  const { data, onNavigate } = props;

  return (
    <header className="flex flex-col justify-center px-8">
      <nav className="flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto text-gray-900 bg-white border-gray-200 dark:border-gray-700 sm:pb-16 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
        <div className="ml-[-0.60rem]">
          <MobileNav data={data} onNavigate={onNavigate} />
          {data.map((item) => {
            const { href, text, isActive } = item;
            return (
              <NavItem
                key={href}
                href={href}
                text={text}
                isActive={isActive}
                onNavigate={onNavigate}
              />
            );
          })}
        </div>
        <DarkModeButton />
      </nav>
    </header>
  );
}

export default Nav;
