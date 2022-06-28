import cn from 'classnames';
import { useCallback } from 'react';

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
        'md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
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
      <nav className="relative flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto text-gray-900 border-gray-200 dark:border-gray-700 sm:pb-16 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
        <div className="ml-[-0.60rem]">
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
      </nav>
    </header>
  );
}

export default Nav;
