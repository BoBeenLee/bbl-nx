import { render } from '@testing-library/react';

import PostCaptionTemplate from './post-caption-template';

describe('PostCaptionTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PostCaptionTemplate
        url={'url'}
        title={'title'}
        description={'description'}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
