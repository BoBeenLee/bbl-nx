import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { mockBlogs } from "../../__mocks__/blog";
import { BlogTemplate, BlogTemplateProps } from './blog-template';

export default {
  component: BlogTemplate,
  title: 'templates/BlogTemplate',
  argTypes: {},
} as Meta;

const Template: Story<BlogTemplateProps> = (args) => <BlogTemplate {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  allPosts: mockBlogs,
  asPath: "",
  onNavigate: () => {
    // SOMETHING
  }
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};