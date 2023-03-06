import { Story, Meta } from '@storybook/react';
import { mockBlogId } from '../../../__mocks__/blog';
import { LayoutTemplate } from '@bbl-nx/ui-components/templates';
import { BlogIdTemplate, BlogIdTemplateProps } from './blog-[id]-template';

export default {
  component: BlogIdTemplate,
  title: 'templates/BlogIdTemplate',
  argTypes: {},
} as Meta;

const Template: Story<BlogIdTemplateProps> = (args) => (
  <LayoutTemplate>
    <BlogIdTemplate {...args} />
  </LayoutTemplate>
);

export const Primary = Template.bind({});
Primary.args = {
  id: mockBlogId.slug,
  title: mockBlogId.title,
  createdAt: mockBlogId.createdAt,
  content: mockBlogId.content,
};
