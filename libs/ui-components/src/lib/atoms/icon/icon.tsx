import { svgIcons } from './svg';

type SvgType = keyof typeof svgIcons;
export type IconType = SvgType;

export interface IconProps {
  name: IconType;
  color?: string;
}

export function Icon(props: IconProps) {
  const { name } = props;
  const TargetComponent = svgIcons[name];
  return <TargetComponent className={`w-full h-full`} />;
}

export default Icon;
