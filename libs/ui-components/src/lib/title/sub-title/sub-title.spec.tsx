import { render } from '@testing-library/react';

import SubTitle from './sub-title';

describe('SubTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SubTitle
        {...{
          title: 'Hello World',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});