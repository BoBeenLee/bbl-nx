import { render } from '@testing-library/react';
import { nav } from '@bbl-nx/constants';

import NavItem from './nav-item';

describe('NavItem', () => {
  it('should render successfully', () => {
    const item = nav[0];
    const { baseElement } = render(
      <NavItem href={item?.href ?? '/'} text={item?.text ?? ''} />
    );
    expect(baseElement).toBeTruthy();
  });
});
