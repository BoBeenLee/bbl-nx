import { render } from '@testing-library/react';

import HomeTemplate from './home-template';

describe('HomeTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HomeTemplate
        asPath=""
        onNavigate={() => {
          // SOMETHING
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
