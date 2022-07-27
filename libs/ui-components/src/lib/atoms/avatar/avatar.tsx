import { logoImages } from '@bbl-nx/images';
import cn from 'classnames';
export interface AvatarProps {
  className?: string;
  alt?: string;
  width?: string;
}

export function Avatar(props: AvatarProps) {
  const { className, alt, width } = props;
  return (
    <picture>
      <source srcSet={logoImages.quokkaWebp} type="image/webp" />
      <img
        className={cn(className, 'rounded-full')}
        alt={alt}
        width={width}
        src={logoImages.quokkaPng}
      />
    </picture>
  );
}

export default Avatar;
