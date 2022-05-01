import { render } from '@testing-library/react';

import MenuItem from './menu-item';

describe('MenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuItem />);
    expect(baseElement).toBeTruthy();
  });
});
