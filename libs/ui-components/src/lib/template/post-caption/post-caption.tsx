import styled from 'styled-components';
import SocialLinks from '../../link/social-links/social-links';
import Seperator from '../../seperator/seperator';

/* eslint-disable-next-line */
export interface PostCaptionProps {
  url: string;
  title: string;
  description: string;
}

const StyledPostCaption = styled.div`
  margin-top: 50px;
`;

const SocialLinkBox = styled(SocialLinks)`
  width: 150px;
  float: right;
`;

export function PostCaption(props: PostCaptionProps) {
  const { url, title, description } = props;
  return (
    <StyledPostCaption>
      <Seperator />
      <SocialLinkBox
        url={`http://bbl.netlify.com${url}`}
        title={title}
        description={description}
        iconSize={35}
      />
    </StyledPostCaption>
  );
}

export default PostCaption;
