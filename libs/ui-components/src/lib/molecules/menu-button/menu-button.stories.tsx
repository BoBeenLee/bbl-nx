import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { MenuButton, MenuButtonProps } from './menu-button';

export default {
  component: MenuButton,
  title: 'molecules/MenuButton',
  argTypes: {},
} as Meta;

const Template: Story<MenuButtonProps> = (args) => <MenuButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  onToggleMenu: () => {
    // SOMETHING
  },
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};
