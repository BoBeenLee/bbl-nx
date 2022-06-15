import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FaccsProps {}

const StyledFaccs = styled.div`
  color: pink;
`;

export function Faccs() {
  return (
    <StyledFaccs>
      <h1>Welcome to Faccs!</h1>
    </StyledFaccs>
  );
}

export default Faccs;
