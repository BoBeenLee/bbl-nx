import { render } from '@testing-library/react';

import SocialLinks from './social-links';

describe('SocialLinks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SocialLinks
        {...{
          description: 'hello',
          iconSize: 35,
          title: 'Components/hello world',
          url: 'http://bbl.netlify.com',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
