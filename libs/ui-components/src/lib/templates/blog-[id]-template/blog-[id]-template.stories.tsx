import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { mockBlogId } from '../../__mocks__/blog';
import { BlogIdTemplate, BlogIdTemplateProps } from './blog-[id]-template';

export default {
  component: BlogIdTemplate,
  title: 'templates/BlogIdTemplate',
  argTypes: {},
} as Meta;

const Template: Story<BlogIdTemplateProps> = (args) => (
  <BlogIdTemplate {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: mockBlogId.slug,
  title: mockBlogId.title,
  createdAt: mockBlogId.createdAt,
  content: mockBlogId.content,
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};
