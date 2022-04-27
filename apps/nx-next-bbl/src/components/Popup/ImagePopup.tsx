import _ from "lodash";
import React, { PureComponent } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

import { dimension } from "src/styles/dimension";
import images from "src/images";

interface IProps {
  showModal: boolean;
  renderImage: () => any;
  onClose: () => void;
}

const customStyle = {
  overlay: {
    zIndex: 999
  }
};

const Root = styled(ReactModal)``;

const ImagePopupBox = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  /* border: 1px solid rgb(204, 204, 204); */
  background: transparent;
  max-width: ${dimension.mobileSize};
  text-align: center;
`;

const ImageBox = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
`;

const CloseBox = styled.img<{ size: number }>`
  position: absolute;
  top: -${({ size = 20 }) => size / 2}px;
  right: -${({ size = 20 }) => size / 2}px;
  width: ${({ size = 20 }) => size}px;
  height: ${({ size = 20 }) => size}px;
  cursor: pointer;
`;

class ImagePopup extends PureComponent<IProps> {
  public static defaultProps = {
    onClose: _.identity,
    renderImage: _.identity,
    showModal: false
  };

  public render() {
    const { showModal, renderImage, onClose } = this.props;
    return (
      <Root style={customStyle} isOpen={showModal}>
        <ImagePopupBox>
          <ImageBox>
            <CloseBox onClick={onClose} size={30} src={images.closeIcon} />
            {renderImage()}
          </ImageBox>
        </ImagePopupBox>
      </Root>
    );
  }
}

export default ImagePopup;
