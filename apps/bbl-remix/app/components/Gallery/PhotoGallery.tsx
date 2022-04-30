import _ from "lodash";
import React, { PureComponent } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { isMobile } from "@bbl-remix/utils/navigator";

interface IProps {
  images: string[];
  onImagePopup: (args: any) => void;
}

const settings = {
  adaptiveHeight: true,
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500
};

const SliderBox = styled(Slider)`
  width: 1px;
  min-width: 100%;
`;

const ImageBox = styled.div`
  padding: 10px 10px 30px 10px;
`;

const PopupImageBox = styled.div`
  height: 100%;
`;

// tslint:disable:object-literal-sort-keys
class PhotoGallery extends PureComponent<IProps> {
  public static defaultProps = {
    images: _.times(5, () => {
      return "https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&w=256&h=256";
    }),
    onImagePopup: _.identity
  };

  public render() {
    const { images } = this.props;

    if (_.isEmpty(images)) {
      return <div />;
    }
    return (
      <SliderBox {...settings}>
        {_.map(images, (image, index) => (
          <ImageBox onClick={_.partial(this.onPhotoClick, index)} key={index}>
            <img alt="" style={{ width: "100%" }} src={image} />
          </ImageBox>
        ))}
      </SliderBox>
    );
  }

  private onPhotoClick = (index: number) => {
    if (!isMobile()) {
      return;
    }
    const { onImagePopup, images } = this.props;
    onImagePopup(() => {
      return (
        <PopupImageBox>
          <img alt="" style={{ width: "100%" }} src={images[index]} />
        </PopupImageBox>
      );
    });
  };
}

export default PhotoGallery;
