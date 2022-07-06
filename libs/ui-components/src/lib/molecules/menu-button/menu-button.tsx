import cn from 'classnames';
import { Icon } from '../../atoms';
import styles from './menu-button.module.css';

export interface MenuButtonProps {
  open: boolean;
  onToggleMenu: () => void;
}

export function MenuButton(props: MenuButtonProps) {
  const { open, onToggleMenu } = props;
  return (
    <button
      className={cn(styles['burger'], 'visible md:hidden')}
      aria-label="Toggle menu"
      type="button"
      onClick={onToggleMenu}
    >
      <Icon
        className="absolute w-10 h-10 top-[1.8rem] px-2 py-1"
        name={'menu'}
        dataProps={{ hide: open }}
      />
      <Icon
        className="absolute w-10 h-10 top-[1.8rem] px-2 py-1 ml-[-0.30rem]"
        name={'close'}
        dataProps={{ hide: !open }}
      />
    </button>
  );
}

export default MenuButton;
