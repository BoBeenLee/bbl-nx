import _ from 'lodash';
import styled from 'styled-components';
import Slider from 'react-slick';
import { useCallback } from 'react';
import { isMobile } from '@nx-bbl/utils';

/* eslint-disable-next-line */
export interface PhotoGalleryProps {
  images: string[];
  onImagePopup: (PopupImage: React.ReactNode) => void;
}

const DEFAULT_SETTINGS = {
  adaptiveHeight: true,
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
};

const StyledPhotoGallery = styled(Slider)`
  width: 1px;
  min-width: 100%;
`;

const Image = styled.div`
  padding: 10px 10px 30px 10px;
`;

const PopupImage = styled.div`
  height: 100%;
`;

export function PhotoGallery(props: PhotoGalleryProps) {
  const { images, onImagePopup } = props;

  const onPhotoClick = useCallback(
    (index: number) => {
      if (!isMobile()) {
        return;
      }
      onImagePopup(
        <PopupImage>
          <img alt="" style={{ width: '100%' }} src={images[index]} />
        </PopupImage>
      );
    },
    [images, onImagePopup]
  );

  if (_.isEmpty(images)) {
    return <div />;
  }

  return (
    <StyledPhotoGallery {...DEFAULT_SETTINGS}>
      {_.map(images, (image, index) => (
        <Image onClick={_.partial(onPhotoClick, index)} key={index}>
          <img alt="" style={{ width: '100%' }} src={image} />
        </Image>
      ))}
    </StyledPhotoGallery>
  );
}

PhotoGallery.defaultProps = {
  images: _.times(5, () => {
    return 'https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&w=256&h=256';
  }),
  onImagePopup: _.identity,
};

export default PhotoGallery;
