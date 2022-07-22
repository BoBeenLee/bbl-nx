import { render } from '@testing-library/react';

import PersonalPortfolios from './personal-portfolios';

describe('PersonalPortfolios', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PersonalPortfolios />
    );
    expect(baseElement).toBeTruthy();
  });
});
