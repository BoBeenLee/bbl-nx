import { getImages } from '@bbl-nx/images';
import cn from 'classnames';
import Image from 'next/image';

export interface AvatarProps {
  className?: string;
  alt?: string;
  width?: string;
}

export function Avatar(props: AvatarProps) {
  const { className, alt, width } = props;
  return (
    <div className={cn(className, 'relative rounded-full overflow-hidden')}>
      <Image
        alt={alt}
        width={width}
        layout={'fill'}
        src={getImages().logoImages.quokkaPng}
        priority={true}
      />
    </div>
  );
}

export default Avatar;
