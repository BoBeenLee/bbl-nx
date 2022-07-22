import { render } from '@testing-library/react';

import Activities from './activities';

describe('Activities', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Activities />
    );
    expect(baseElement).toBeTruthy();
  });
});
