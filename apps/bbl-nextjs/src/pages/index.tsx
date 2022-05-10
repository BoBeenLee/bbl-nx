import React from 'react';
import styled from 'styled-components';
import { Layout } from '@bbl-nx/ui-components';
import { Rotate } from '@bbl-nx/organizations';

const Root = styled.div`
  height: 100%;
`;

const HomePage = () => {
  return (
    <Root>
      <Rotate />
    </Root>
  );
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
