import { render } from '@testing-library/react';

import WithTistory from './with-tistory';

describe('WithTistory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WithTistory />);
    expect(baseElement).toBeTruthy();
  });
});
