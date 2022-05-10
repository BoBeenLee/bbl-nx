import { Story, Meta } from '@storybook/react';
import _ from 'lodash';
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
Primary.args = {
  images: _.times(5, () => {
    return 'https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&w=256&h=256';
  }),
  onImagePopup: _.identity,
};
