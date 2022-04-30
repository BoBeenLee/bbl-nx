import _ from "lodash";
import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "@bbl-remix/constants";

interface IProps {
  name: string;
  url: string;
  onPress: (value: { isOpen: boolean }) => void;
}

const Root = styled.div`
  padding: 10px 0;
`;

const MenuLink = styled.a``;

const MenuLinkText = styled.span`
  color: ${theme.primary};
  text-decoration: none;
  &:hover {
    color: ${theme.secondary};
  }
`;

class MenuItem extends Component<IProps> {
  public static defaultProps = {
    name: "Home",
    onPress: _.identity,
    url: "/"
  };
  public render() {
    const { name, url, onPress } = this.props;
    return (
      <Root>
        <MenuLink href={url}>
          <MenuLinkText>{name}</MenuLinkText>
        </MenuLink>
      </Root>
    );
  }
}

export default MenuItem;
