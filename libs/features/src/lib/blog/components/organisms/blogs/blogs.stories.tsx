import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Blogs, BlogsProps } from './blogs';

export default {
  component: Blogs,
  title: 'organisms/Blogs',
  argTypes: {},
} as Meta;

const Template: Story<BlogsProps> = (args) => <Blogs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};