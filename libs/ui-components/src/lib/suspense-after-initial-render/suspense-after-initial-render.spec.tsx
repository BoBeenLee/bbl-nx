import { render } from '@testing-library/react';

import SuspenseAfterInitialRender from './suspense-after-initial-render';

describe('SuspenseAfterInitialRender', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SuspenseAfterInitialRender>loading</SuspenseAfterInitialRender>);
    expect(baseElement).toBeTruthy();
  });
});
