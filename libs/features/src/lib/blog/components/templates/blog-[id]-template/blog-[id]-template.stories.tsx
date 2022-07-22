import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { mockBlogId } from '../../../__mocks__/blog';
import { LayoutTemplate } from '@bbl-nx/ui-components';
import { BlogIdTemplate, BlogIdTemplateProps } from './blog-[id]-template';

export default {
  component: BlogIdTemplate,
  title: 'templates/BlogIdTemplate',
  argTypes: {},
} as Meta;

const Template: Story<BlogIdTemplateProps> = (args) => (
  <LayoutTemplate
    {...{
      asPath: '/',
      onNavigate: action('onNavigate'),
    }}
  >
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
