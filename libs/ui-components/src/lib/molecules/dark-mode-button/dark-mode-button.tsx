import { Icon } from '../../atoms';
import cn from 'classnames';

export interface DarkModeButtonProps {
  className?: string;
}

export function DarkModeButton(props: DarkModeButtonProps) {
  const { className } = props;
  return (
    <div className={cn(className, 'rounded-full')}>
      <Icon name={'light'} />
    </div>
  );
}

export default DarkModeButton;
