import { render } from '@testing-library/react';
import { identity } from "lodash";

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
