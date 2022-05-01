import { Story, Meta } from '@storybook/react';
import { BottomPopup, BottomPopupProps } from './bottom-popup';

export default {
  component: BottomPopup,
  title: 'BottomPopup',
} as Meta;

const Template: Story<BottomPopupProps> = (args) => <BottomPopup {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
