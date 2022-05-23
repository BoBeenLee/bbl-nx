import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MachinesProps {}

const StyledMachines = styled.div`
  color: pink;
`;

export function Machines(props: MachinesProps) {
  return (
    <StyledMachines>
      <h1>Welcome to Machines!</h1>
    </StyledMachines>
  );
}

export default Machines;
