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
      className={cn(styles['burger'], 'visible')}
      aria-label="Toggle menu"
      type="button"
      onClick={onToggleMenu}
    >
      <Icon className="absolute w-5 h-5" name={'menu'} dataProps={{ hide: open }} />
      <Icon className="absolute w-5 h-5"  name={'close'} dataProps={{ hide: !open }} />
    </button>
  );
}

export default MenuButton;
