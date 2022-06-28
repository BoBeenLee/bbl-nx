import { svgIcons } from './svg';
import cn from 'classnames';

type SvgType = keyof typeof svgIcons;
export type IconType = SvgType;

export interface IconProps {
  className?: string;
  name: IconType;
  color?: string;
}

export function Icon(props: IconProps) {
  const { className, name } = props;
  const TargetComponent = svgIcons[name];
  return <TargetComponent className={cn(className, `w-full h-full`)} />;
}

export default Icon;
