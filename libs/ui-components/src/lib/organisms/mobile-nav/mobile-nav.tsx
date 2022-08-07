import { useCallback, useEffect, useState } from 'react';
import { MenuButton } from '../../molecules';
import MobileMenus, { MenuItemProps } from '../mobile-menus/mobile-menus';

export interface MobileNavProps {
  data: Omit<MenuItemProps, 'transitionDelay'>[];
}

export function MobileNav(props: MobileNavProps) {
  const { data } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = useCallback(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <MenuButton
        className="visible md:hidden absolute top-[1.8rem]"
        open={isMenuOpen}
        onToggleMenu={onToggleMenu}
      />
      <MobileMenus open={isMenuOpen} data={data} />
    </>
  );
}

export default MobileNav;
