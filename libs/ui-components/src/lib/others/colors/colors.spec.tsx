import { render } from '@testing-library/react';

import Colors from './colors';

describe('Colors', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Colors />);
    expect(baseElement).toBeTruthy();
  });
});
