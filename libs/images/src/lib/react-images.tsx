import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactImagesProps {}

const StyledReactImages = styled.div`
  color: pink;
`;

export function ReactImages(props: ReactImagesProps) {
  return (
    <StyledReactImages>
      <h1>Welcome to ReactImages!</h1>
    </StyledReactImages>
  );
}

export default ReactImages;
