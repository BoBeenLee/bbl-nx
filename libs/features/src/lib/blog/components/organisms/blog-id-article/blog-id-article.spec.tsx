import { render } from '@testing-library/react';

import BlogIdArticle from './blog-id-article';

describe('BlogIdArticle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BlogIdArticle
        title="title"
        content="content"
        createdAt={String(Date.now().valueOf())}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
