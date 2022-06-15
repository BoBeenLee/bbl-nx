import { Story, Meta } from '@storybook/react';
import { Menu, MenuProps } from './menu';

export default {
  component: Menu,
  title: 'Atoms/Menu/Menu',
  argTypes: {
    onToggleMenu: { action: 'onToggleMenu executed!' },
  },
} as Meta;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: false,
};
