import { render } from '@testing-library/react';

import ALink from './alink';

describe('ALink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ALink href="http://example.com" isExternal={false}>
        Example
      </ALink>
    );
    expect(baseElement).toBeTruthy();
  });
});
