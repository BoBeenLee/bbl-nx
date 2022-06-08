import { today } from '@bbl-nx/utils';
import { render } from '@testing-library/react';

import PostCard from './post-card';

describe('PostCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PostCard
        {...{
          createdAt: '2018-01-22T05:24:36.000Z',
          externalUrl: '',
          title: 'Components/Hello World',
          url: '',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
