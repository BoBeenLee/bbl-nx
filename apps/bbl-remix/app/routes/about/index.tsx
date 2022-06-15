import React, { Component } from 'react';
import styled from 'styled-components';

import { Activity, Education, Experience, Skill } from '@bbl-nx/ui-components';

const Root = styled.div`
  padding-top: 20px;
`;

class AboutPage extends Component {
  public render() {
    return (
      <Root>
        <Experience />
        <Activity />
        <Skill />
        <Education />
      </Root>
    );
  }
}

export default AboutPage;
