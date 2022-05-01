import { render } from '@testing-library/react';

import PostCard from './post-card';

describe('PostCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostCard />);
    expect(baseElement).toBeTruthy();
  });
});
