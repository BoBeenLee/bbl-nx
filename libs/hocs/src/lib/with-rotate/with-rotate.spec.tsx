import { render } from '@testing-library/react';

import WithRotate from './with-rotate';

describe('WithRotate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WithRotate />);
    expect(baseElement).toBeTruthy();
  });
});
