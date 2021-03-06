import { Story, Meta } from '@storybook/react';
import { BlogIdArticle, BlogIdArticleProps } from './blog-id-article';

export default {
  component: BlogIdArticle,
  title: 'organisms/BlogIdArticle',
  argTypes: {},
} as Meta;

const Template: Story<BlogIdArticleProps> = (args) => (
  <BlogIdArticle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'title',
  content: 'content',
  createdAt: String(Date.now().valueOf()),
};
