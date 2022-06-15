import React, { Component } from 'react';
import styled from 'styled-components';
import { Rotate } from '@bbl-nx/ui-components';

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
