import styled from 'styled-components';
import SocialLinks from '../../link/social-links/social-links';
import Seperator from '../../seperator/seperator';

/* eslint-disable-next-line */
export interface PostCaptionTemplateProps {
  url: string;
  title: string;
  description: string;
}

const StyledPostCaption = styled.div`
  margin-top: 50px;
`;

const StyledSocialLink = styled(SocialLinks)`
  width: 150px;
  float: right;
`;

export function PostCaptionTemplate(props: PostCaptionTemplateProps) {
  const { url, title, description } = props;
  return (
    <StyledPostCaption>
      <Seperator />
      <StyledSocialLink
        url={`http://bbl.netlify.com${url}`}
        title={title}
        description={description}
        iconSize={35}
      />
    </StyledPostCaption>
  );
}

export default PostCaptionTemplate;
