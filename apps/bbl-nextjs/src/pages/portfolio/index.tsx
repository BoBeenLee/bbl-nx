import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Layout from '@bbl-nextjs/components/Layout';
import { companyPortfolios, teamPortfolios } from '@bbl-nextjs/constants/portfolio';
import { Portfolio } from '@bbl-nextjs/organizations/portfolio';

const Root = styled.div`
  padding-top: 20px;
`;

class PorfolioPage extends PureComponent {
  public render() {
    return (
      <Layout>
        <Root>
          <Portfolio
            key={'company'}
            title="Company"
            portfolios={companyPortfolios}
          />
          <Portfolio
            key={'project'}
            title={`Project`}
            portfolios={teamPortfolios}
          />
        </Root>
      </Layout>
    );
  }
}

export default PorfolioPage;
