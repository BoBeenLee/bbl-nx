import { NavKey } from '@bbl-nx/constants';
import cn from 'classnames';
import { ALink } from '../../atoms';
import styles from './mobile-menus.module.css';
import { nav } from '@bbl-nx/constants';

export interface MenuItemProps {
  href: NavKey;
  text: string;
  transitionDelay: number;
}

export interface MenusProps {
  className?: string;
  open: boolean;
}

const DEFAULT_TRANSITION_DELAY = 150;
const DEFAULT_TRANSITION_DELAY_UNIT = 25;

function MenuItem({ href, text, transitionDelay }: MenuItemProps) {
  return (
    <li
      className={cn(
        'text-sm font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100'
      )}
      style={{ transitionDelay: `${transitionDelay}ms` }}
    >
      <ALink className="flex w-auto py-4" urlPath={href}>
        {text}
      </ALink>
    </li>
  );
}

export function MobileMenus(props: MenusProps) {
  const { className, open } = props;
  return (
    <ul
      className={cn(
        className,
        styles['menu'],
        'flex flex-col absolute bg-white dark:bg-gray-900 left-0 visible md:hidden',
        open && styles['menuRendered']
      )}
    >
      {nav.map((item, index) => {
        const { href, text } = item;
        return (
          <MenuItem
            key={text}
            href={href}
            text={text}
            transitionDelay={
              DEFAULT_TRANSITION_DELAY + index * DEFAULT_TRANSITION_DELAY_UNIT
            }
          />
        );
      })}
    </ul>
  );
}

export default MobileMenus;
