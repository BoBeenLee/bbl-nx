import { render } from '@testing-library/react';

import Portfolio from './portfolio';

describe('Portfolio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Portfolio />);
    expect(baseElement).toBeTruthy();
  });
});
