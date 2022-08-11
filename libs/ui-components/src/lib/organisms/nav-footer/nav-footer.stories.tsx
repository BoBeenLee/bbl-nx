import { Story, Meta } from '@storybook/react';
import { NavFooter } from './nav-footer';

export default {
  component: NavFooter,
  title: 'molecules/NavFooter',
  argTypes: {},
} as Meta;

const Template: Story = (args) => <NavFooter {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
