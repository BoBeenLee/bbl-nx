import { render } from '@testing-library/react';

import BlogIdTemplate from './blog-[id]-template';

describe('BlogIdTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogIdTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
