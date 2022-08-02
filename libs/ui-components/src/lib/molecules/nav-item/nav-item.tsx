import cn from 'classnames';
import { useCallback } from 'react';

export interface NavItemProps {
  href: string;
  text: string;
  isActive: boolean;
  onNavigate: ({ href }: { href: string }) => void;
}

export function NavItem(props: NavItemProps) {
  const { href, text, isActive, onNavigate } = props;

  const onNavigateItem = useCallback(() => {
    onNavigate({ href });
  }, [href, onNavigate]);
  return (
    <button
      className={cn(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
      )}
      onClick={onNavigateItem}
    >
      <span className="capsize">{text}</span>
    </button>
  );
}

export default NavItem;
