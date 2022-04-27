import _ from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Rotate as WindowRotate } from 'src/faccs';
import images from 'src/images';

const Root = styled.div`
  display: grid;
  grid-template-areas: '. . .' '. icon .' '. . .';
  position: relative;
  height: 450px;
  grid-template-rows: 20% 50% 30%;
`;

const IconBox = styled.div<{ zDeg: number }>`
  grid-area: icon;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  transform: ${({ zDeg = 0 }) => `rotateZ(${zDeg}deg)`};
`;

const LinkBox = styled.a``;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
class Rotate extends Component {
  public render() {
    return (
      <Root>
        <WindowRotate>
          {({ zDeg }: { zDeg: number }) => this.renderIcons({ zDeg })}
        </WindowRotate>
      </Root>
    );
  }

  private renderIcons = ({ zDeg }: { zDeg: number }) => (
    <IconBox zDeg={zDeg}>
      <LinkBox href="https://www.facebook.com/bobin.lee.9" target="_blank">
        <Icon alt="facebook" src={images.facebook} />
      </LinkBox>
      <LinkBox href="https://www.instagram.com/bobeenlee_" target="_blank">
        <Icon alt="instagram" src={images.instagram} />
      </LinkBox>
      <LinkBox
        href="https://www.linkedin.com/in/%EB%B3%B4%EB%B9%88-%EC%9D%B4-035613a5/"
        target="_blank"
      >
        <Icon alt="linkedin" src={images.linkedin} />
      </LinkBox>
    </IconBox>
  );
}

export default Rotate;
