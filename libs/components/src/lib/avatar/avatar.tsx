import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AvatarProps {
  alt?: string;
  width?: string;
  src?: any;
  avatarUrl?: string;
  onPress?: () => void;
}

const StyledAvatar = styled.img`
  border-radius: 50%;
`;

const DEFAULT_URL = 'https://avatars0.githubusercontent.com/u/1489321?v=4';

export function Avatar(props: AvatarProps) {
  const { avatarUrl = DEFAULT_URL, ...rest } = props;
  return <StyledAvatar {...rest} src={avatarUrl} />;
}

export default Avatar;
