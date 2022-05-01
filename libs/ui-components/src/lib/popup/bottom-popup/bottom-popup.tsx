import { theme } from '@nx-bbl/styles';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BottomPopupProps {
  children: React.ReactNode;
}

const StyledBottomPopup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: ${theme.bgColor};
  border-top: 1px solid ${theme.lineColor};
  z-index: 10;
  position: fixed;
  bottom: 0;
`;

export function BottomPopup(props: BottomPopupProps) {
  const { children, ...rest } = props;
  return <StyledBottomPopup {...rest}>{children}</StyledBottomPopup>;
}

export default BottomPopup;
