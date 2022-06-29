import { svgIcons, reactIcons } from './svg';
import cn from 'classnames';

type SvgType = keyof typeof svgIcons;
type ReactIconType = keyof typeof reactIcons;

export type IconType = SvgType | ReactIconType;

export interface IconProps {
  className?: string;
  name: IconType;
}

const isReactIconType = (name: IconType): name is ReactIconType => {
  if (name in reactIcons) {
    return true;
  }
  return false;
};

export function Icon(props: IconProps) {
  const { className, name } = props;

  if (isReactIconType(name)) {
    const TargetComponent = reactIcons[name];
    return <TargetComponent className={cn(className, `dark:fill-white fill-black w-full h-full`)} />;
  }
  const TargetComponent = svgIcons[name];
  return <TargetComponent className={cn(className, `dark:fill-white fill-black w-full h-full`)} />;
}

export default Icon;
