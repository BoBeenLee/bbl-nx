import { nav } from '@bbl-nx/constants';
import { render } from '@testing-library/react';

import Nav from './nav';

describe('Nav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Nav
        {...{
          data: nav.map((item) => ({
            text: item.text,
            href: item.href,
          })),
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
