import { render } from '@testing-library/react';

import AboutTemplate from './about-template';

describe('AboutTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
