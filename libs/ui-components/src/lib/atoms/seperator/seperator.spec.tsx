import { render } from '@testing-library/react';

import Seperator from './seperator';

describe('Seperator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Seperator />);
    expect(baseElement).toBeTruthy();
  });
});
