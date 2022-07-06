import cn from 'classnames';
import { useCallback } from 'react';
import DarkModeButton from '../../molecules/dark-mode-button/dark-mode-button';
import MobileNav from '../mobile-nav/mobile-nav';

export interface NavItemProps {
  href: string;
  text: string;
  isActive: boolean;
}

export interface NavProps {
  data: NavItemProps[];
  onNavigate: ({ href }: { href: string }) => void;
}

function NavItem({
  href,
  text,
  isActive,
  onNavigate,
}: NavItemProps & { onNavigate: NavProps['onNavigate'] }) {
  const onNavigateItem = useCallback(() => {
    onNavigate({ href });
  }, [href, onNavigate]);

  return (
    <button
      className={cn(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
      )}
      onClick={onNavigateItem}
    >
      <span className="capsize">{text}</span>
    </button>
  );
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
