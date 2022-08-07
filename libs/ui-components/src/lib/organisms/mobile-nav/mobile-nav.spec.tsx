import { render } from '@testing-library/react';

import MobileNav from './mobile-nav';

describe('MobileNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileNav data={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
