import { render } from '@testing-library/react';

import PortfolioCard from './portfolio-card';

describe('PortfolioCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PortfolioCard />);
    expect(baseElement).toBeTruthy();
  });
});
