import { Story, Meta } from '@storybook/react';
import { PhotoGallery, PhotoGalleryProps } from './photo-gallery';

export default {
  component: PhotoGallery,
  title: 'PhotoGallery',
  argTypes: {
    onImagePopup: { action: 'onImagePopup executed!' },
  },
} as Meta;

const Template: Story<PhotoGalleryProps> = (args) => <PhotoGallery {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
