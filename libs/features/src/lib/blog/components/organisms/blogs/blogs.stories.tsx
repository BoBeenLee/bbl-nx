import { Story, Meta } from '@storybook/react';
import { Blogs, BlogsProps } from './blogs';
import { mockBlogs } from '../../../__mocks__/blog';

export default {
  component: Blogs,
  title: 'organisms/Blogs',
  argTypes: {},
} as Meta;

const Template: Story<BlogsProps> = (args) => <Blogs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: "w-full",
  blogs: mockBlogs,
};
