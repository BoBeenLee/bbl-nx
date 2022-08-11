import { render } from '@testing-library/react';

import NavFooter from './nav-footer';

describe('NavFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavFooter />);
    expect(baseElement).toBeTruthy();
  });
});
