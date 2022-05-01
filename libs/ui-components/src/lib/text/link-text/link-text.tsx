import { theme } from '@nx-bbl/styles';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LinkTextProps {
  className?: string;
  children: React.ReactNode;
}

const StyledLinkText = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${theme.third};
  line-height: 1.5;
`;

export function LinkText(props: LinkTextProps) {
  const { className, children } = props;
  return <StyledLinkText className={className}>{children}</StyledLinkText>;
}

export default LinkText;
