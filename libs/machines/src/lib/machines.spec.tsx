import { render } from '@testing-library/react';

import Machines from './machines';

describe('Machines', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Machines />);
    expect(baseElement).toBeTruthy();
  });
});
