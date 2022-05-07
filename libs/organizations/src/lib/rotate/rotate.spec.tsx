import { render } from '@testing-library/react';

import Rotate from './rotate';

describe('Rotate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rotate />);
    expect(baseElement).toBeTruthy();
  });
});
