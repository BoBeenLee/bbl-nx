import { render } from '@testing-library/react';

import ALink from './alink';

describe('ALink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ALink />
    );
    expect(baseElement).toBeTruthy();
  });
});
