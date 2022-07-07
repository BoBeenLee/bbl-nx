import { render } from '@testing-library/react';
import { mockBlogs } from '../../__mocks__/blog';

import BlogTemplate from './blog-template';

describe('BlogTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogTemplate allBlogs={mockBlogs} />);
    expect(baseElement).toBeTruthy();
  });
});
