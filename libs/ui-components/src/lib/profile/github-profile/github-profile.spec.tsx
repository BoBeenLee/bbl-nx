import { render } from '@testing-library/react';

import GithubProfile from './github-profile';

describe('GithubProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GithubProfile />);
    expect(baseElement).toBeTruthy();
  });
});
