import { today } from "@bbl-nx/utils";
import { render } from '@testing-library/react';

import PostCard from './post-card';

describe('PostCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PostCard
        {...{
          createdAt: today().valueOf(),
          externalUrl: '',
          title: 'Hello World',
          url: '',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
