import { render } from '@testing-library/react';

import ImagePopup from './image-popup';

describe('ImagePopup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImagePopup />);
    expect(baseElement).toBeTruthy();
  });
});
