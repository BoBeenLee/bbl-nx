import { render } from '@testing-library/react';

import ReactImages from './react-images';

describe('ReactImages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactImages />);
    expect(baseElement).toBeTruthy();
  });
});
