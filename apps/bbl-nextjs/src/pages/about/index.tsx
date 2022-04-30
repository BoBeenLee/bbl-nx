import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from '@bbl-nextjs/components/Layout';
import {
  Activity,
  Education,
  Experience,
  Skill,
} from '@bbl-nextjs/organizations/about';

const Root = styled.div`
  padding-top: 20px;
`;

class AboutPage extends Component {
  public render() {
    return (
      <Layout>
        <Root>
          <Experience />
          <Activity />
          <Skill />
          <Education />
        </Root>
      </Layout>
    );
  }
}

export default AboutPage;
