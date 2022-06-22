import { Story, Meta } from '@storybook/react';
import { fireEvent, within } from "@storybook/testing-library";
import _ from 'lodash';
import { PhotoGallery, PhotoGalleryProps } from './photo-gallery';

export default {
  component: PhotoGallery,
  title: 'Molecules/PhotoGallery',
  argTypes: {},
} as Meta;

const Template: Story<PhotoGalleryProps> = (args) => <PhotoGallery {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  images: _.times(5, () => {
    return 'https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&w=256&h=256';
  }),
};



Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  const nextButton = canvas.getByText("2");
  await fireEvent.click(nextButton);
  canvasElement.querySelector("[data-rmiz-wrap='visible']");
  const visiblePhotoDiv = canvasElement.querySelector("[data-rmiz-wrap='visible']");
  const visiblePhotoButton = visiblePhotoDiv?.getElementsByTagName("button")?.item?.(0);
  visiblePhotoButton && await fireEvent.click(visiblePhotoButton);
};
