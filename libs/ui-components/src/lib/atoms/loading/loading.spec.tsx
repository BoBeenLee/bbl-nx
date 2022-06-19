import { render } from '@testing-library/react';

import Loading from './loading';

describe('Loading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Loading size={20} />);
    expect(baseElement).toBeTruthy();
  });
});
