import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { LayoutTemplate } from '@bbl-nx/ui-components';
import { mockBlogs } from '../../../__mocks__/blog';
import { BlogTemplate, BlogTemplateProps } from './blog-template';

export default {
  component: BlogTemplate,
  title: 'templates/BlogTemplate',
  argTypes: {},
} as Meta;

const Template: Story<BlogTemplateProps> = (args) => (
  <LayoutTemplate>
    <BlogTemplate {...args} />
  </LayoutTemplate>
);

export const Primary = Template.bind({});
Primary.args = {
  allBlogs: mockBlogs,
};
