import { render } from '@testing-library/react';

import Hocs from './hocs';

describe('Hocs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hocs />);
    expect(baseElement).toBeTruthy();
  });
});
