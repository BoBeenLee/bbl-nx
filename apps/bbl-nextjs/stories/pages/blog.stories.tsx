import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import BlogPage, { BlogPageProps } from '../../src/pages/blog/index';

export default {
  component: BlogPage,
  title: 'pages/Blog',
  argTypes: {},
} as Meta;

const Template: Story<BlogPageProps> = (args) => <BlogPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  allBlogs: [],
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};

Primary.parameters = {
  nextRouter: {
    path: '/project',
    asPath: '/project',
  },
};
