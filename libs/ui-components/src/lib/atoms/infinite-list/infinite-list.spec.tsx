import { render } from '@testing-library/react';

import InfiniteList from './infinite-list';

describe('InfiniteList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <InfiniteList />
    );
    expect(baseElement).toBeTruthy();
  });
});
