import { render } from '@testing-library/react';

import LinkText from './link-text';

describe('LinkText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinkText />);
    expect(baseElement).toBeTruthy();
  });
});
