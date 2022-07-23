import { render } from '@testing-library/react';

import BlogIdArticle from './blog-id-article';

describe('BlogIdArticle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BlogIdArticle title="title" content="content" createdAt={'2022-06-21'} />
    );
    expect(baseElement).toBeTruthy();
    const { baseElement: baseElement2 } = render(
      <BlogIdArticle
        title="title"
        content="content"
        createdAt={'2018-01-22T05:24:36.000Z'}
      />
    );
    expect(baseElement2).toBeTruthy();
  });
});
