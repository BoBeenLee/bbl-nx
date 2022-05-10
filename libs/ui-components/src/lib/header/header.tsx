import _ from 'lodash';
import { dimension, theme } from '@bbl-nx/styles';
import { isIE, media } from '@bbl-nx/utils';
import styled, { css } from 'styled-components';
import Seperator from '../seperator/seperator';
import { useCallback, useState } from 'react';
import Avatar from '../avatar/avatar';
import Headroom from 'react-headroom';
import { images } from '@bbl-nx/images';
import Menu from '../menu/menu/menu';

export interface HeaderProps {
  titles: Array<{ url: string; name: string }>;
}

const StyledHeader = styled.div`
  .headroom-transform-none .headroom {
    transform: none !important;
  }
`;

const HeadroomGroup = styled.div`
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

const LogoLink = styled.a`
  width: 45px;
  height: 45px;
`;

const Icon = styled(Avatar)`
  width: 45px;
  height: 45px;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.a``;

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

const MenuGroup = styled.div`
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

const SeperatorBottomGroup = styled.div`
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

export function Header(props: HeaderProps) {
  const { titles } = props;
  const styles = Object.assign({}, { backgroundColor: '#fff' });
  const [isOpenHeader, setIsOpenHeader] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onToggleHeader = useCallback(
    (value: boolean) => {
      if (isOpenMenu) {
        return;
      }
      setIsOpenHeader(value);
    },
    [isOpenMenu]
  );

  const onToggleMenu = useCallback((value: { isOpen: boolean }) => {
    setIsOpenHeader(true);
    setIsOpenMenu(value.isOpen);
  }, []);

  const renderTitleItem = (
    title: { url: string; name: string },
    index: number
  ) => {
    const { url, name } = title;
    return (
      <TitleGroup key={index}>
        <Title href={url}>
          <TitleText>{name}</TitleText>
        </Title>
      </TitleGroup>
    );
  };

  return (
    <StyledHeader>
      <Headroom
        className={isOpenHeader ? 'headroom-transform-none' : ''}
        style={styles}
        onUnpin={_.partial(onToggleHeader, false)}
        onPin={_.partial(onToggleHeader, true)}
      >
        <HeadroomGroup>
          <HeaderTitle>
            <Logo>
              <LogoLink href="/">
                <Icon src={images.quokka} alt="bobeenlee" />
              </LogoLink>
            </Logo>
            {_.map(titles, renderTitleItem)}
          </HeaderTitle>
          <MenuGroup>
            <Menu
              menus={titles}
              isOpen={isOpenMenu}
              onToggleMenu={onToggleMenu}
            />
          </MenuGroup>
          <SeperatorBottomGroup>
            <SeperatorBottom />
          </SeperatorBottomGroup>
        </HeadroomGroup>
      </Headroom>
    </StyledHeader>
  );
}

export default Header;
