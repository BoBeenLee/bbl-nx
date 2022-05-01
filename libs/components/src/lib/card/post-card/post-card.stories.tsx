import { Story, Meta } from '@storybook/react';
import { PostCard, PostCardProps } from './post-card';

export default {
  component: PostCard,
  title: 'PostCard',
} as Meta;

const Template: Story<PostCardProps> = (args) => <PostCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: '',
  date: '',
  url: '',
  linkUrl: '',
};
