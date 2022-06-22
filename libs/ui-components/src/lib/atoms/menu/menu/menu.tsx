import _ from 'lodash';
import { getThemeValueByMode, ThemeProps } from '@bbl-nx/styles';
import { CSSProperties } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import styled, { withTheme } from 'styled-components';
import Seperator from '../../seperator/seperator';
import MenuItem from '../menu-item/menu-item';

export interface MenuProps extends ThemeProps {
  isOpen: boolean;
  menus: Array<{ name: string; url: string }>;
  onToggleMenu: (value: { isOpen: boolean }) => void;
}

const StyledMenu = styled.div`
  #menu {
    top: 0;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 6em;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const BottomSeparator = styled(Seperator)`
  border-width: 2px;
`;

const makeStyles = (props: ThemeProps) => {
  const styles: Record<string, CSSProperties> = {
    bmBurgerButton: {
      position: 'relative',
      width: '20px',
      height: '15px',
    },
    bmBurgerBars: {
      background: getThemeValueByMode(props.theme?.mode ?? 'light', 'primary'),
    },
    bmCrossButton: {
      height: '12px',
      width: '12px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenu: {
      top: 0,
      background: getThemeValueByMode(props.theme?.mode ?? 'light', 'bgColor'),
      // fontSize: "18px"
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
    },
    bmOverlay: {
      top: 0,
      left: 0,
      background: 'rgba(0, 0, 0, 0.3)',
    },
  };
  return styles;
};

export function Menu(props: MenuProps) {
  const { menus, isOpen, onToggleMenu } = props;
  return (
    <StyledMenu>
      <BurgerMenu
        id="menu"
        right={true}
        styles={makeStyles(props)}
        isOpen={isOpen}
        onStateChange={onToggleMenu}
        pageWrapId="page-box"
        outerContainerId="outer-container"
      >
        <Header>
          <BottomSeparator />
        </Header>
        <Content>
          {_.map(menus, (menu) => (
            <MenuItem key={menu.name} {...menu} />
          ))}
        </Content>
      </BurgerMenu>
    </StyledMenu>
  );
}

export default withTheme(Menu);
