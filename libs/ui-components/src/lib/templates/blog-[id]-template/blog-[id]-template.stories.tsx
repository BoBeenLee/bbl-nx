import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { BlogIdTemplate, BlogIdTemplateProps } from './blog-Id-template';

export default {
  component: BlogIdTemplate,
  title: 'templates/BlogIdTemplate',
  argTypes: {},
} as Meta;

const Template: Story<BlogIdTemplateProps> = (args) => <BlogIdTemplate {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};