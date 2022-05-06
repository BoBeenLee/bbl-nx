import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OrganizationsProps {}

const StyledOrganizations = styled.div`
  color: pink;
`;

export function Organizations(props: OrganizationsProps) {
  return (
    <StyledOrganizations>
      <h1>Welcome to Organizations!</h1>
    </StyledOrganizations>
  );
}

export default Organizations;
