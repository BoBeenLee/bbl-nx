import { Story, Meta } from '@storybook/react';
import { Nav } from './nav';

export default {
  component: Nav,
  title: 'organisms/Nav',
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Nav {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
