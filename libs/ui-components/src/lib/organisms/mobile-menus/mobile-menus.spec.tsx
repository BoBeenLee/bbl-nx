import { render } from '@testing-library/react';

import MobileMenus from './mobile-menus';

describe('MobileMenus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileMenus open={true} />);
    expect(baseElement).toBeTruthy();
  });
});
