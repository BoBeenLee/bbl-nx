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
  title: 'micro generator PLOP 란?',
  content:
    'micro generator framework라 불립니다. 우리가 자주 겪는 동일한 패턴의 구조 생성(routes, controllers, components...)을 **일관성** 있는 방법으로 생성해줍니다.',
  createdAt: String('2022-06-21'),
};
