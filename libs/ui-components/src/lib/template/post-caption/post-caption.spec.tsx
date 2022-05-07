import { render } from '@testing-library/react';

import PostCaption from './post-caption';

describe('PostCaption', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostCaption />);
    expect(baseElement).toBeTruthy();
  });
});
