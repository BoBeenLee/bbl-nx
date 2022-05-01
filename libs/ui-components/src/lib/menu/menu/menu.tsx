import _ from 'lodash';
import { theme } from '@bbl-nx/styles';
import { CSSProperties } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import styled from 'styled-components';
import Seperator from '../../seperator/seperator';
import MenuItem from '../menu-item/menu-item';

/* eslint-disable-next-line */
export interface MenuProps {
  isOpen: boolean;
  menus: Array<{ name: string; url: string }>;
  onToggleMenu: (value: { isOpen: boolean }) => void;
}

const StyledMenu = styled.div`
  #menu {
    top: 0;
  }
`;

const HeaderBox = styled.div`
  display: flex !important;
  flex-direction: row;
  height: 6em;
`;

const ContentBox = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const BottomSeparator = styled(Seperator)`
  border-width: 2px;
`;

// tslint:disable:object-literal-sort-keys
const styles: Record<string, CSSProperties> = {
  bmBurgerButton: {
    position: 'relative',
    width: '20px',
    height: '15px',
  },
  bmBurgerBars: {
    background: theme.primary,
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
    background: theme.bgColor,
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

export function Menu(props: MenuProps) {
  const { menus, isOpen, onToggleMenu } = props;
  return (
    <StyledMenu>
      <BurgerMenu
        id="menu"
        right={true}
        styles={styles}
        isOpen={isOpen}
        onStateChange={onToggleMenu}
        pageWrapId="page-box"
        outerContainerId="outer-container"
      >
        <HeaderBox>
          <BottomSeparator />
        </HeaderBox>
        <ContentBox>
          {_.map(menus, (menu) => (
            <MenuItem key={menu.name} {...menu} />
          ))}
        </ContentBox>
      </BurgerMenu>
    </StyledMenu>
  );
}

export default Menu;
