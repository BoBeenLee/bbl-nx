import { render } from '@testing-library/react';

import PhotoGallery from './photo-gallery';

describe('PhotoGallery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhotoGallery />);
    expect(baseElement).toBeTruthy();
  });
});
