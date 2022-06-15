import _ from 'lodash';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ZoomImage from '../../atoms/image/zoom-image/zoom-image';

export interface PhotoGalleryProps {
  images: string[];
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

export function PhotoGallery(props: PhotoGalleryProps) {
  const { images } = props;

  if (_.isEmpty(images)) {
    return <div />;
  }
  return (
    <StyledPhotoGallery {...DEFAULT_SETTINGS}>
      {_.map(images, (image, index) => (
        <Image key={index}>
          <ZoomImage>
            <img alt="" style={{ width: '100%' }} src={image} />
          </ZoomImage>
        </Image>
      ))}
    </StyledPhotoGallery>
  );
}

export default PhotoGallery;
