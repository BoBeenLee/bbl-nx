import { Story, Meta } from '@storybook/react';
import { within, fireEvent } from '@storybook/testing-library';
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

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await fireEvent.click(canvas.getByText("Open Menu"));
  const bmOverlay = document.querySelector(".bm-overlay");
  bmOverlay && await fireEvent.click(bmOverlay);
};
