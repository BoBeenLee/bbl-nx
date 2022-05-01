import { Story, Meta } from '@storybook/react';
import { GithubProfile, GithubProfileProps } from './github-profile';

export default {
  component: GithubProfile,
  title: 'GithubProfile',
} as Meta;

const Template: Story<GithubProfileProps> = (args) => (
  <GithubProfile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  avatarUrl: '',
  email: '',
  location: '',
  followerCount: 0,
  followingCount: 0,
};
