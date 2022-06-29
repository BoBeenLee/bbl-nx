import { render } from '@testing-library/react';

import ProjectLinks from './project-links';

describe('ProjectLinks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProjectLinks
        {...{
          url: {
            github: 'https://example.com',
            link: 'https://example.com',
            googleStore: 'https://example.com',
            appStore: 'https://example.com',
          },
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
