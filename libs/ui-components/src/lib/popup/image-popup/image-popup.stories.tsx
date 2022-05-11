import { Story, Meta } from '@storybook/react';
import { ImagePopup, ImagePopupProps } from './image-popup';

export default {
  component: ImagePopup,
  title: 'Popup/ImagePopup',
  argTypes: {
    onClose: { action: 'onClose executed!' },
  },
} as Meta;

const Template: Story<ImagePopupProps> = (args) => <ImagePopup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  showModal: false,
};
