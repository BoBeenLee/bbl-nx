export interface AvatarProps {
  alt?: string;
  width?: string;
  avatarUrl: string;
}

const DEFAULT_URL = 'https://avatars0.githubusercontent.com/u/1489321?v=4';

export function Avatar(props: AvatarProps) {
  const { alt, width, avatarUrl = DEFAULT_URL } = props;
  return (
    <img
      className={"rounded-full"}
      alt={alt}
      width={width}
      src={avatarUrl}
    />
  );
}

export default Avatar;
