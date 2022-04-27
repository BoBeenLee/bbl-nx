import Image from 'next/image';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import styled from 'styled-components';
import { BottomPopup, ImagePopup } from 'src/components/Popup';
import images from 'src/images';

const Root = styled.div``;

const Child = styled.div``;

const renderImage = () => <img src={images.mock.board} alt="" />;

storiesOf('Popup', module)
  .addDecorator((getStory) => <Root>{getStory()}</Root>)
  .add('BottomPopup', () => (
    <Child>
      <BottomPopup>Hello World</BottomPopup>
    </Child>
  ))
  .add('ImagePopup', () => (
    <Child>
      <ImagePopup showModal={true} renderImage={renderImage} />
    </Child>
  ));
