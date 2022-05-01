import { theme } from '@bbl-nx/styles';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SeperatorProps {}

const StyledSeperator = styled.div`
  width: 100%;
  border: 1px solid ${theme.lineColor};
`;

export function Seperator(props: SeperatorProps) {
  return <StyledSeperator {...props} />;
}

export default Seperator;
