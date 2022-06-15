import { render } from '@testing-library/react';

import Education from './education';

describe('Education', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Education />);
    expect(baseElement).toBeTruthy();
  });
});
