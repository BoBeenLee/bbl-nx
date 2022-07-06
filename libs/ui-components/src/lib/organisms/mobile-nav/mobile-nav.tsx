import { useCallback, useEffect, useState } from 'react';
import { MenuButton } from '../../molecules';
import MenuList, { MenuItemProps, MenuListProps } from '../menu-list/menu-list';

export interface MobileNavProps {
  data: Omit<MenuItemProps, 'transitionDelay'>[];
  onNavigate: MenuListProps['onNavigate'];
}

export function MobileNav(props: MobileNavProps) {
  const { data, onNavigate } = props;
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
      <MenuButton open={isMenuOpen} onToggleMenu={onToggleMenu} />
      <MenuList open={isMenuOpen} data={data} onNavigate={onNavigate} />
    </>
  );
}

export default MobileNav;
