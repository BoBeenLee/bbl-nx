import { images } from '@bbl-nx/images';
import cn from 'classnames';
export interface AvatarProps {
  className?: string;
  alt?: string;
  width?: string;
}

export function Avatar(props: AvatarProps) {
  const { className, alt, width } = props;
  return (
    <img
      className={cn(className, 'rounded-full')}
      alt={alt}
      width={width}
      src={images.quokka}
    />
  );
}

export default Avatar;
