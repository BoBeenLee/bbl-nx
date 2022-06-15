import { render } from '@testing-library/react';

import ZoomImage from './zoom-image';

describe('ZoomImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ZoomImage>
        <div>testtesttest</div>
      </ZoomImage>
    );
    expect(baseElement).toBeTruthy();
  });
});
