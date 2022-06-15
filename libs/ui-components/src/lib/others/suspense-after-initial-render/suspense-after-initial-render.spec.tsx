import { render } from '@testing-library/react';

import SuspenseAfterInitialRender from './suspense-after-initial-render';

describe('SuspenseAfterInitialRender', () => {
  it.skip('should render successfully', () => {
    const { baseElement } = render(<SuspenseAfterInitialRender fallback={"loading"}>loading</SuspenseAfterInitialRender>);
    expect(baseElement).toBeTruthy();
  });
});
