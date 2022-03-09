import Link from "next/link";
import _ from "lodash";
import React, { PureComponent } from "react";
import Headroom from "react-headroom";
import styled, { css } from "styled-components";
import { menu as titles, theme } from "src/constants";
import { media } from "src/utils/media";
import { isIE } from "src/utils/navigator";
import { Avatar } from "src/components/Avatar";
import { Menu } from "src/components/Menu";
import { Seperator } from "src/components/Seperator";
import images from "src/images";
import { dimension } from "src/styles/dimension";

interface IStates {
  isOpenHeader: boolean;
  isOpenMenu: boolean;
}

const RootWrapper = styled.div`
  .headroom-transform-none .headroom {
    transform: none !important;
  }
`;

const Root = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 6em;
  position: relative;
  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr;
  `};
`;

const HeaderTitle = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-columns: 30% repeat(4, 1fr);
  grid-template-rows: auto;
  ${media.desktop`
    width: ${dimension.desktopSize}px;
  `};
  ${isIE() &&
    css`
      display: flex;
      padding: 20px;
    `}
`;

const Logo = styled.div`
  grid-column: 1;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoLink = styled(Link)`
  width: 45px;
  height: 45px;
`;

const IconBox = styled(Avatar)`
  width: 45px;
  height: 45px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Link)``;

const TitleText = styled.span`
  /* font-size: 11px; */
  padding: 0.5em;
  color: ${theme.primary};
  text-decoration: none;
  &:hover {
    color: ${theme.secondary};
  }

  ${media.mobile`
    display: none;
    `};
  cursor: pointer;
`;

const MenuBox = styled.div`
  grid-column: 3;
  position: relative;
  display: none;
  width: 100px;
  ${media.mobile`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `};
`;

const SeperatorBottomBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SeperatorBottom = styled(Seperator)`
  width: 100%;
  overflow: hidden;
`;

class Header extends PureComponent<any, IStates> {
  public state = {
    isOpenHeader: true,
    isOpenMenu: false
  };

  public render() {
    const { isOpenHeader, isOpenMenu } = this.state;
    const styles = Object.assign({}, { backgroundColor: "#fff" });
    return (
      <RootWrapper>
        <Headroom
          className={isOpenHeader ? "headroom-transform-none" : ""}
          style={styles}
          onUnpin={_.partial(this.toggleHeader, false)}
          onPin={_.partial(this.toggleHeader, true)}
        >
          <Root>
            <HeaderTitle>
              <Logo>
                <LogoLink href="/">
                  <IconBox src={images.quokka} alt="bobeenlee" />
                </LogoLink>
              </Logo>
              {_.map(titles, this.renderTitleItem)}
            </HeaderTitle>
            <MenuBox>
              <Menu isOpen={isOpenMenu} toggleMenu={this.toggleMenu} />
            </MenuBox>
            <SeperatorBottomBox>
              <SeperatorBottom />
            </SeperatorBottomBox>
          </Root>
        </Headroom>
      </RootWrapper>
    );
  }

  private toggleHeader = (value: boolean) => {
    const { isOpenMenu } = this.state;
    if (isOpenMenu) {
      return;
    }
    this.setState({
      isOpenHeader: value
    });
  };

  private toggleMenu = (value: { isOpen: boolean }) => {
    this.setState({
      isOpenHeader: true,
      isOpenMenu: value.isOpen
    });
  };

  private renderTitleItem = (
    title: { url: string; name: string },
    index: number
  ) => {
    const { url, name } = title;
    return (
      <TitleBox key={index}>
        <Title href={url}>
          <TitleText>{name}</TitleText>
        </Title>
      </TitleBox>
    );
  };
}

export default Header;
