import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { mockBlogs } from '../../__mocks__/blog';
import LayoutTemplate from '../layout-template/layout-template';
import { BlogTemplate, BlogTemplateProps } from './blog-template';

export default {
  component: BlogTemplate,
  title: 'templates/BlogTemplate',
  argTypes: {},
} as Meta;

const Template: Story<BlogTemplateProps> = (args) => (
  <LayoutTemplate
    {...{
      asPath: '/',
      onNavigate: () => {
        // SOMETHING
      },
    }}
  >
    <BlogTemplate {...args} />
  </LayoutTemplate>
);

export const Primary = Template.bind({});
Primary.args = {
  allPosts: mockBlogs,
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};
