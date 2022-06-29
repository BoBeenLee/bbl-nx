import { render } from '@testing-library/react';

import DarkModeButton from './dark-mode-button';

describe('DarkModeButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DarkModeButton />
    );
    expect(baseElement).toBeTruthy();
  });
});
