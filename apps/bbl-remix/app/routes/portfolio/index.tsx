import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { companyPortfolios, teamPortfolios } from '@bbl-nx/constants';
import { Portfolio } from '@bbl-nx/organizations';

const Root = styled.div`
  padding-top: 20px;
`;

class PorfolioPage extends PureComponent {
  public render() {
    return (
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
    );
  }
}

export default PorfolioPage;
