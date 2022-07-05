import { render } from '@testing-library/react';

import MenuButton from './menu-button';

describe('MenuButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MenuButton
        open={true}
        onToggleMenu={() => {
          // SOMETHING
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
