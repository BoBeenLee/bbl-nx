import { render } from '@testing-library/react';

import Faccs from './faccs';

describe('Faccs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Faccs />);
    expect(baseElement).toBeTruthy();
  });
});
