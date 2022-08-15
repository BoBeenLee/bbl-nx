import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { LayoutTemplate } from '@bbl-nx/ui-components';
import { mockBlogs } from '../../../__mocks__/blog';
import { BlogTemplate, BlogTemplateProps } from './blog-template';
import { within, userEvent, findByRole } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const searchInput = await canvas.findByRole('search');

  searchInput.focus();
  userEvent.type(searchInput, "React");
  userEvent.clear(searchInput);
  userEvent.type(searchInput, "React 아무나");
};
