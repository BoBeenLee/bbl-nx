import { render } from '@testing-library/react';

import Avatar from './avatar';

describe('Avatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Avatar
        {...{
          alt: 'avatar',
          width: '100px',
          avatarUrl: 'https://avatars0.githubusercontent.com/u/1489321?v=4',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
