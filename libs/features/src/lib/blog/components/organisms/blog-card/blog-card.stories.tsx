import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { BlogCard, BlogCardProps } from './blog-card';

export default {
  component: BlogCard,
  title: 'organisms/BlogCard',
  argTypes: {},
} as Meta;

const Template: Story<BlogCardProps> = (args) => <BlogCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'test',
  createdAt: '2020-10-10',
  summary: 'summary',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};
