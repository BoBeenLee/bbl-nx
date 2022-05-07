import { render } from '@testing-library/react';

import Post from './post';

describe('Post', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Post />);
    expect(baseElement).toBeTruthy();
  });
});
