import _ from "lodash";
import React, { PureComponent } from "react";
import { slide as BurgerMenu } from "react-burger-menu";
import styled from "styled-components";
import { MenuItem } from "~/components/Menu";
import { menu as menus, theme } from "~/constants";
import { Seperator } from "~/components/Seperator";

interface IProps {
  isOpen: boolean;
  toggleMenu: (value: { isOpen: boolean }) => void;
}

const Root = styled.div`
  #menu {
    top: 0;
  }
`;

// tslint:disable:object-literal-sort-keys
const styles: any = {
  bmBurgerButton: {
    position: "relative",
    width: "20px",
    height: "15px"
  },
  bmBurgerBars: {
    background: theme.primary
  },
  bmCrossButton: {
    height: "12px",
    width: "12px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    top: 0,
    background: theme.bgColor
    // fontSize: "18px"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad"
  },
  bmOverlay: {
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.3)"
  }
};

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

class Menu extends PureComponent<IProps> {
  public static defaultProps = {
    isOpen: false,
    toggleMenu: _.identity
  };

  public render() {
    const { isOpen, toggleMenu } = this.props;
    return (
      <Root>
        <BurgerMenu
          id="menu"
          right={true}
          styles={styles}
          isOpen={isOpen}
          onStateChange={toggleMenu}
          pageWrapId="page-box"
          outerContainerId="outer-container"
        >
          <HeaderBox>
            <BottomSeparator />
          </HeaderBox>
          <ContentBox>
            {_.map(menus, menu => (
              <MenuItem key={menu.name} onPress={toggleMenu} {...menu} />
            ))}
          </ContentBox>
        </BurgerMenu>
      </Root>
    );
  }
}

export default Menu;
