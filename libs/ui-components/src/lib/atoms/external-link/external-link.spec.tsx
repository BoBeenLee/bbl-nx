import { render } from '@testing-library/react';

import ExternalLink from './external-link';

describe('ExternalLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ExternalLink href="http://example.com">example</ExternalLink>
    );
    expect(baseElement).toBeTruthy();
  });
});
