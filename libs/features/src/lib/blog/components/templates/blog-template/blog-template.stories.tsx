import { Story, Meta } from '@storybook/react';
import { LayoutTemplate } from '@bbl-nx/ui-components/templates';
import { mockBlogs } from '../../../__mocks__/blog';
import { BlogTemplate, BlogTemplateProps } from './blog-template';
import { within, userEvent } from '@storybook/testing-library';

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

export const SearchReact = Template.bind({});
SearchReact.args = {
  allBlogs: mockBlogs,
};

SearchReact.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const searchInput = await canvas.findByRole('search');

  searchInput.focus();
  userEvent.type(searchInput, 'React');
};

export const SearchReactSomething = Template.bind({});
SearchReactSomething.args = {
  allBlogs: mockBlogs,
};

SearchReactSomething.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const searchInput = await canvas.findByRole('search');
  searchInput.focus();
  userEvent.type(searchInput, 'React 아무나');
};

export const SearchEmpty = Template.bind({});
SearchEmpty.args = {
  allBlogs: mockBlogs,
};

SearchEmpty.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const searchInput = await canvas.findByRole('search');
  searchInput.focus();
  userEvent.type(searchInput, '');
};
