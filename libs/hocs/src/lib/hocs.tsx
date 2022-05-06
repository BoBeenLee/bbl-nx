import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HocsProps {}

const StyledHocs = styled.div`
  color: pink;
`;

export function Hocs(props: HocsProps) {
  return (
    <StyledHocs>
      <h1>Welcome to Hocs!</h1>
    </StyledHocs>
  );
}

export default Hocs;
