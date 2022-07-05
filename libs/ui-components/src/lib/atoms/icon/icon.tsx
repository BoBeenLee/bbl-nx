import { svgIcons, reactIcons } from './svg';
import cn from 'classnames';
import { getKeys } from "@bbl-nx/utils";

type SvgType = keyof typeof svgIcons;
type ReactIconType = keyof typeof reactIcons;

export type IconType = SvgType | ReactIconType;

export interface IconProps {
  className?: string;
  name: IconType;
  dataProps?: {
    hide: boolean;
  };
}

const isReactIconType = (name: IconType): name is ReactIconType => {
  if (name in reactIcons) {
    return true;
  }
  return false;
};

export function Icon(props: IconProps) {
  const { className, name, dataProps = {} } = props;
  const data = getKeys(dataProps).reduce((res, key) => {
    return {
      ...res,
      [`data-${key}`]: dataProps[key],
    }
  }, {});
  if (isReactIconType(name)) {
    const TargetComponent = reactIcons[name];
    return (
      <TargetComponent
        className={cn(className, `dark:fill-white fill-black w-full h-full`)}
        {...data}
      />
    );
  }
  const TargetComponent = svgIcons[name];
  return (
    <TargetComponent
      className={cn(className, `dark:fill-white fill-black w-full h-full`)}
      {...data}
    />
  );
}

export default Icon;
