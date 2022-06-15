import { render } from '@testing-library/react';

import MenuItem from './menu-item';

describe('MenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MenuItem
        {...{
          name: 'Home',
          url: '/',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
