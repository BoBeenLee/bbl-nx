import React from 'react';
import styled from 'styled-components';

import { Layout } from '@bbl-nx/ui-components';
import { Activity, Education, Experience, Skill } from '@bbl-nx/organizations';

const Root = styled.div`
  padding-top: 20px;
`;

const AboutPage = () => {
  return (
    <Root>
      <Experience />
      <Activity />
      <Skill />
      <Education />
    </Root>
  );
};

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AboutPage;
