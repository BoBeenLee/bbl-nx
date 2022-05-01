import _ from 'lodash';
import { theme } from '@nx-bbl/styles';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContentTitleProps {
  className?: string;
  title: string;
  uri: string;
}

const StyledContentTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.primary};
  line-height: 2;
`;

const RootLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.primary};
  text-decoration: none;
  line-height: 2;
  &:hover {
    opacity: 0.7;
  }
`;

export function ContentTitle(props: ContentTitleProps) {
  const { className, title, uri } = props;
  if (!_.isEmpty(uri)) {
    return (
      <RootLink className={className} href={uri} target="_blank">
        {title}
      </RootLink>
    );
  }
  return <StyledContentTitle className={className}>{title}</StyledContentTitle>;
}

export default ContentTitle;
