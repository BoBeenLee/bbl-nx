import { render } from '@testing-library/react';

import BlogCard from './blog-card';

describe('BlogCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BlogCard
        {...{
          title: 'test',
          createdAt: '2020-10-10',
          summary: 'summary',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
