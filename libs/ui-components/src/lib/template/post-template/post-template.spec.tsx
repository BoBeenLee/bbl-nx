import { render } from '@testing-library/react';

import PostTemplate from './post-template';

describe('PostTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PostTemplate
        data={{
          markdownRemark: {
            id: '1',
            html: 'test',
            fields: {
              slug: 'slug',
            },
            frontmatter: {
              title: 'title',
            },
          },
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
