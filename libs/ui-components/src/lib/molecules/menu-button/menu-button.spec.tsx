import { render } from '@testing-library/react';
import { identity } from "@bbl-nx/utils";

import MenuButton from './menu-button';

describe('MenuButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MenuButton
        open={true}
        onToggleMenu={identity}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
