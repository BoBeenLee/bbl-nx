import React, { Component } from "react";
import styled from "styled-components";
import Layout from "@bbl-remix/components/Layout";
import { Rotate } from "@bbl-remix/organizations/home";

const Root = styled.div`
  height: 100%;
`;

class HomePage extends Component {
  public render() {
    return (
      <Root>
        <Rotate />
      </Root>
    );
  }
}

export default HomePage;
