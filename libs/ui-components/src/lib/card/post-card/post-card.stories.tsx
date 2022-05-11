import { Story, Meta } from '@storybook/react';
import { PostCard, PostCardProps } from './post-card';
import { today } from '@bbl-nx/utils';

export default {
  component: PostCard,
  title: 'Card/PostCard',
} as Meta;

const Template: Story<PostCardProps> = (args) => <PostCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  createdAt: "2018-01-22T05:24:36.000Z",
  externalUrl: '',
  title: 'Hello World',
  url: '',
};
