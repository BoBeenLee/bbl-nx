import { theme } from '@bbl-nx/styles';
import styled from 'styled-components';

export interface LineTextProps {
  className?: string;
  children: React.ReactNode;
}

const StyledLineText = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${theme.third};
  line-height: 1.5;
`;

export function LineText(props: LineTextProps) {
  const { className, children } = props;
  return <StyledLineText className={className}>{children}</StyledLineText>;
}

export default LineText;
