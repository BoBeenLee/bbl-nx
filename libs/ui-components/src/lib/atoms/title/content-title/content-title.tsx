import { theme } from '@bbl-nx/styles';
import styled, { css } from 'styled-components';

export interface ContentTitleProps {
  className?: string;
  title: string;
  uri?: string;
}

const StyledContentTitle = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.primary};
  line-height: 2;
  ${(props) =>
    props.href
      ? css`
          text-decoration: none;
          &:hover {
            opacity: 0.7;
          }
        `
      : css``}
`;

export function ContentTitle(props: ContentTitleProps) {
  const { className, title, uri } = props;
  return (
    <StyledContentTitle
      className={className}
      {...(uri ? { href: uri, target: '_blank' } : {})}
    >
      {title}
    </StyledContentTitle>
  );
}

export default ContentTitle;
