import { render } from '@testing-library/react';

import Organizations from './organizations';

describe('Organizations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Organizations />);
    expect(baseElement).toBeTruthy();
  });
});
