import { render } from '@testing-library/react';

import Avatar from './avatar';

describe('Avatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Avatar
        {...{
          className: 'w-6 h-6',
          alt: 'avatar',
          avatarUrl: 'https://avatars0.githubusercontent.com/u/1489321?v=4',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
