import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';

export default {
  component: Avatar,
  title: 'Atoms/Avatar',
  argTypes: {
    onPress: { action: 'onPress executed!' },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  alt: 'avatar',
  width: '100px',
  avatarUrl: 'https://avatars0.githubusercontent.com/u/1489321?v=4',
};
