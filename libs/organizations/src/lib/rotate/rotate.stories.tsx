import { Story, Meta } from '@storybook/react';
import { Rotate, RotateProps } from './rotate';

export default {
  component: Rotate,
  title: 'Rotate',
} as Meta;

const Template: Story<RotateProps> = (args) => <Rotate {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
