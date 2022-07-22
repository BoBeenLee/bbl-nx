import { render } from '@testing-library/react';

import TeckStacks from './teckstacks';

describe('TeckStacks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TeckStacks />
    );
    expect(baseElement).toBeTruthy();
  });
});
