import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '@bbl-nextjs/components/Layout';
import { Rotate } from '@bbl-nextjs/organizations/home';

const Root = styled.div`
  height: 100%;
`;

class HomePage extends Component {
  public render() {
    return (
      <Layout>
        <Root>
          <Rotate />
        </Root>
      </Layout>
    );
  }
}

export default HomePage;
