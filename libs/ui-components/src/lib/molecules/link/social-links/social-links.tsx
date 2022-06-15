import styled from 'styled-components';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

export interface SocialLinksProps {
  className?: string;
  url: string;
  title: string;
  description: string;
  iconSize: number;
}

const StyledSocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

const Seperator = styled.div`
  width: 10px;
  height: 100%;
`;

export function SocialLinks(props: SocialLinksProps) {
  const { className, url, title, iconSize } = props;
  return (
    <StyledSocialLinks className={className}>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon round={true} size={iconSize} />
      </TwitterShareButton>
      <Seperator />
      <FacebookShareButton url={url}>
        <FacebookIcon round={true} size={iconSize} />
      </FacebookShareButton>
    </StyledSocialLinks>
  );
}

export default SocialLinks;
