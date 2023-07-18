import { DarkModeButton } from '../../molecules/dark-mode-button/dark-mode-button';
import { NavItem } from '../../molecules/nav-item/nav-item';
import MobileNav from '../mobile-nav/mobile-nav';
import { nav } from '@bbl-nx/constants';

interface Props {
  asPath: string;
}

export function Nav(props: Props) {
  const { asPath } = props;
  return (
    <header className="flex flex-col justify-center px-8">
      <nav className="relative flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto text-gray-900 bg-white border-gray-200 dark:border-gray-700 sm:pb-16 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
        <div className="ml-[-0.60rem]">
          <MobileNav key={asPath} />
          <div className="hidden md:inline-block">
            {nav.map((item) => {
              const { href, text } = item;
              return <NavItem key={href} href={href} text={text} />;
            })}
          </div>
        </div>
        <DarkModeButton />
      </nav>
    </header>
  );
}

export default Nav;
