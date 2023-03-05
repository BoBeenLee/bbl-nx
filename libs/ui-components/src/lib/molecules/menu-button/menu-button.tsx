import cn from 'classnames';
import { Icon } from '../../atoms/icon/icon';
import styles from './menu-button.module.css';

export interface MenuButtonProps {
  className?: string;
  open: boolean;
  onToggleMenu: () => void;
}

export function MenuButton(props: MenuButtonProps) {
  const { className, open, onToggleMenu } = props;
  return (
    <button
      className={cn(styles['burger'], className)}
      aria-label="Toggle menu"
      type="button"
      onClick={onToggleMenu}
    >
      <Icon
        className="absolute w-10 h-10 px-2 py-1"
        name={'menu'}
        dataProps={{ hide: open }}
      />
      <Icon
        className="absolute w-10 h-10 px-2 py-1 ml-[-0.30rem]"
        name={'close'}
        dataProps={{ hide: !open }}
      />
    </button>
  );
}

export default MenuButton;
