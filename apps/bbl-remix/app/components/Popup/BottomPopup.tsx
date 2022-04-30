import React, { PureComponent } from "react";
import styled from "styled-components";
import theme from "@bbl-remix/styles/theme";

interface IProps {
  children: React.ReactNode;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: ${theme.bgColor};
  border-top: 1px solid ${theme.lineColor};
  z-index: 10;
  position: fixed;
  bottom: 0;
`;

class BottomPopup extends PureComponent<IProps> {
  public static defaultProps = {};
  public render() {
    const { children, ...rest } = this.props;
    return <Root {...rest}>{children}</Root>;
  }
}

export default BottomPopup;
