import { render } from '@testing-library/react';

import BlogIdTemplate from './blog-[id]-template';
import { mockBlogId } from "../../__mocks__/blog";

describe('BlogIdTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BlogIdTemplate
        {...{
          id: mockBlogId.slug,
          title: mockBlogId.title,
          createdAt: mockBlogId.createdAt,
          content: mockBlogId.content,
        }}
        asPath={""}
        onNavigate={() => {
          // SONETHING
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
