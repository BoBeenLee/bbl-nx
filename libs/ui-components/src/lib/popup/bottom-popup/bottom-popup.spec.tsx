import { render } from '@testing-library/react';

import BottomPopup from './bottom-popup';

describe('BottomPopup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BottomPopup />);
    expect(baseElement).toBeTruthy();
  });
});
