import { Story, Meta } from '@storybook/react';
import { MenuItem, MenuItemProps } from './menu-item';

export default {
  component: MenuItem,
  title: 'Atoms/Menu/MenuItem',
} as Meta;

const Template: Story<MenuItemProps> = (args) => <MenuItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Home',
  url: '/',
};
