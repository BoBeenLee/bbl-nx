import { ALink } from '../../atoms';

export interface NavItemProps {
  href: string;
  text: string;
}

export function NavItem(props: NavItemProps) {
  const { href, text } = props;

  return (
    <ALink
      className={
        'p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all font-normal text-gray-600 dark:text-gray-400'
      }
      activeClassName={`font-semibold text-gray-800 dark:text-gray-200`}
      href={href}
    >
      <span className="capsize">{text}</span>
    </ALink>
  );
}

export default NavItem;
