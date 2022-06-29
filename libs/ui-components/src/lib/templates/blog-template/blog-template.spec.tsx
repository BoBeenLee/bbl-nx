import { render } from '@testing-library/react';

import BlogTemplate from './blog-template';

describe('BlogTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BlogTemplate />
    );
    expect(baseElement).toBeTruthy();
  });
});
