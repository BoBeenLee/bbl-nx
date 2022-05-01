import { images } from '@bbl-nx/images';
import { dimension } from '@bbl-nx/styles';
import { CSSProperties } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ImagePopupProps {
  showModal: boolean;
  PopupComponent: React.ReactNode;
  onClose: () => void;
}

const styles: Record<string, CSSProperties> = {
  overlay: {
    zIndex: 999,
  },
};

const StyledImagePopup = styled(ReactModal)``;

const ImagePopupGroup = styled.div`
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

const Image = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
`;

const CloseButton = styled.img<{ size: number }>`
  position: absolute;
  top: -${({ size = 20 }) => size / 2}px;
  right: -${({ size = 20 }) => size / 2}px;
  width: ${({ size = 20 }) => size}px;
  height: ${({ size = 20 }) => size}px;
  cursor: pointer;
`;

export function ImagePopup(props: ImagePopupProps) {
  const { showModal, PopupComponent, onClose } = props;
  return (
    <StyledImagePopup style={styles} isOpen={showModal}>
      <ImagePopupGroup>
        <Image>
          <CloseButton onClick={onClose} size={30} src={images.closeIcon} />
          {PopupComponent}
        </Image>
      </ImagePopupGroup>
    </StyledImagePopup>
  );
}

export default ImagePopup;
