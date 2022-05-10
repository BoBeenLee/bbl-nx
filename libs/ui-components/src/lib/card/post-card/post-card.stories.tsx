import { Story, Meta } from '@storybook/react';
import { PostCard, PostCardProps } from './post-card';
import { today } from '@bbl-nx/utils';

export default {
  component: PostCard,
  title: 'PostCard',
} as Meta;

const Template: Story<PostCardProps> = (args) => <PostCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  createdAt: today().valueOf(),
  externalUrl: '',
  title: 'Hello World',
  url: '',
};
