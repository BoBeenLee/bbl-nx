import { getImages } from '@bbl-nx/images';
import cn from 'classnames';
import Image from 'next/image';

export interface AvatarProps {
  className?: string;
  alt?: string;
}

export function Avatar(props: AvatarProps) {
  const { className, alt } = props;
  return (
    <div className={cn(className, 'relative rounded-full overflow-hidden')}>
      <Image
        alt={alt ?? "avatar"}
        fill={true}
        src={getImages().logoImages.quokkaPng}
        priority={true}
      />
    </div>
  );
}

export default Avatar;
