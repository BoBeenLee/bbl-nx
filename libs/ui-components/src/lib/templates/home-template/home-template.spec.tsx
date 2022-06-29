import { render } from '@testing-library/react';

import HomeTemplate from './home-template';

describe('HomeTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
