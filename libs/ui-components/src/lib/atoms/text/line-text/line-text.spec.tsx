import { render } from '@testing-library/react';

import LineText from './line-text';

describe('LineText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LineText>test</LineText>);
    expect(baseElement).toBeTruthy();
  });
});
