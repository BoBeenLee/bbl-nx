import { nav } from '@bbl-nx/constants';
import { render } from '@testing-library/react';

import NavFooter from './nav-footer';

describe('NavFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NavFooter
        {...{
          data: nav.map((item) => ({ text: item.text, href: item.href })),
          onNavigate: () => {
            // SOMETHING
          },
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
