import { render } from '@testing-library/react';

import CompanyPortfolios from './company-portfolios';

describe('CompanyPortfolios', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CompanyPortfolios />
    );
    expect(baseElement).toBeTruthy();
  });
});
