import styled from 'styled-components';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

/* eslint-disable-next-line */
export interface ZoomImageProps {
  children: React.ReactNode;
}

const StyledZoomImage = styled(Zoom)`
  color: pink;
`;

export function ZoomImage(props: ZoomImageProps) {
  const { children } = props;
  return <StyledZoomImage>{children}</StyledZoomImage>;
}

export default ZoomImage;
