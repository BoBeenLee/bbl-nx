import cn from 'classnames';
import { useCallback } from 'react';
import styles from './mobile-menus.module.css';

export interface MenuItemProps {
  href: string;
  text: string;
  isActive: boolean;
  transitionDelay: number;
}

export interface MenusProps {
  open: boolean;
  data: Omit<MenuItemProps, 'transitionDelay'>[];
  onNavigate: ({ href }: { href: string }) => void;
}

const DEFAULT_TRANSITION_DELAY = 150;
const DEFAULT_TRANSITION_DELAY_UNIT = 25;

function MenuItem({
  href,
  text,
  transitionDelay,
  onNavigate,
}: MenuItemProps & { onNavigate: MenusProps['onNavigate'] }) {
  const onNavigateItem = useCallback(() => {
    onNavigate({ href });
  }, [href, onNavigate]);

  return (
    <li
      className={cn(
        'text-sm font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100'
      )}
      style={{ transitionDelay: `${transitionDelay}ms` }}
      onClick={onNavigateItem}
    >
      <button className="flex w-auto py-4" onClick={onNavigateItem}>
        {text}
      </button>
    </li>
  );
}

export function MobileMenus(props: MenusProps) {
  const { open, data, onNavigate } = props;
  return (
    <ul
      className={cn(
        styles['menu'],
        'flex flex-col absolute bg-white dark:bg-gray-900 left-0 visible md:hidden',
        open && styles['menuRendered']
      )}
    >
      {data.map((item, index) => {
        const { href, text, isActive } = item;
        return (
          <MenuItem
            key={text}
            href={href}
            text={text}
            isActive={isActive}
            transitionDelay={
              DEFAULT_TRANSITION_DELAY + index * DEFAULT_TRANSITION_DELAY_UNIT
            }
            onNavigate={onNavigate}
          />
        );
      })}
    </ul>
  );
}

export default MobileMenus;
