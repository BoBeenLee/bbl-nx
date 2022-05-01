import { render } from '@testing-library/react';

import SocialLinks from './social-links';

describe('SocialLinks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialLinks />);
    expect(baseElement).toBeTruthy();
  });
});
