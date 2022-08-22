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
  className: 'w-[81px] h-[81px] sm:w-[176px] sm:h-[176px]',
  alt: 'avatar',
};
