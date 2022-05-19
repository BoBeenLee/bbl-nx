import { Story, Meta } from '@storybook/react';
import { ZoomImage, ZoomImageProps } from './zoom-image';

export default {
  component: ZoomImage,
  title: 'ZoomImage',
} as Meta;

const Template: Story<ZoomImageProps> = (args) => <ZoomImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <div>testtest</div>,
};
