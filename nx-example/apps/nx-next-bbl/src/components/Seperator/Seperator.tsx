import React, { PureComponent } from "react";
import styled from "styled-components";
import theme from "src/styles/theme";

const Root = styled.div`
  width: 100%;
  border: 1px solid ${theme.lineColor};
`;

class Seperator extends PureComponent {
  public render() {
    return <Root {...this.props} />;
  }
}

export default Seperator;
