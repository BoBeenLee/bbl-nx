import { render } from '@testing-library/react';
import _ from 'lodash';

import PhotoGallery from './photo-gallery';

describe('PhotoGallery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PhotoGallery
        {...{
          images: _.times(5, () => {
            return 'https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&w=256&h=256';
          }),
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
