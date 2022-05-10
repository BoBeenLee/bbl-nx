import styled from 'styled-components';
import { Rotate as WindowRotate } from '@bbl-nx/faccs';
import { images } from '@bbl-nx/images';

/* eslint-disable-next-line */
export interface RotateProps {}

const StyledRotate = styled.div`
  display: grid;
  grid-template-areas: '. . .' '. icon .' '. . .';
  position: relative;
  height: 450px;
  grid-template-rows: 20% 50% 30%;
`;

const IconGroup = styled.div<{ zDeg: number }>`
  grid-area: icon;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  transform: ${({ zDeg = 0 }) => `rotateZ(${zDeg}deg)`};
`;

const IconLink = styled.a``;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export function Rotate(props: RotateProps) {
  const renderIcons = ({ zDeg }: { zDeg: number }) => (
    <IconGroup zDeg={zDeg}>
      <IconLink href="https://www.facebook.com/bobin.lee.9" target="_blank">
        <Icon alt="facebook" src={images.facebook} />
      </IconLink>
      <IconLink href="https://www.instagram.com/bobeenlee_" target="_blank">
        <Icon alt="instagram" src={images.instagram} />
      </IconLink>
      <IconLink
        href="https://www.linkedin.com/in/%EB%B3%B4%EB%B9%88-%EC%9D%B4-035613a5/"
        target="_blank"
      >
        <Icon alt="linkedin" src={images.linkedin} />
      </IconLink>
    </IconGroup>
  );
  return (
    <StyledRotate>
      <WindowRotate>{({ zDeg }) => renderIcons({ zDeg })}</WindowRotate>
    </StyledRotate>
  );
}

export default Rotate;
