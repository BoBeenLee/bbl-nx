import { render } from '@testing-library/react';

import GithubCard from './github-card';

describe('GithubCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GithubCard />);
    expect(baseElement).toBeTruthy();
  });
});
