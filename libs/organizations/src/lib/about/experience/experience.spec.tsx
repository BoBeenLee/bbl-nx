import { render } from '@testing-library/react';

import Experience from './experience';

describe('Experience', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Experience />);
    expect(baseElement).toBeTruthy();
  });
});
