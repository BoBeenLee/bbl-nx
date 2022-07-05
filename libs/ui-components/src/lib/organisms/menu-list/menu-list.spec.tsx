import { render } from '@testing-library/react';

import MenuList from './menu-list';

describe('MenuList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MenuList />
    );
    expect(baseElement).toBeTruthy();
  });
});
