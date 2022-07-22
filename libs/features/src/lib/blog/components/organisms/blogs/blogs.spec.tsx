import { render } from '@testing-library/react';

import Blogs from './blogs';

describe('Blogs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Blogs blogs={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
