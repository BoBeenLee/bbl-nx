import { render } from '@testing-library/react';

import TeamPortfolios from './team-portfolios';

describe('TeamPortfolios', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TeamPortfolios />
    );
    expect(baseElement).toBeTruthy();
  });
});
