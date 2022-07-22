import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Menus, MenusProps } from './menus';
import { nav } from '@bbl-nx/constants';

export default {
  component: Menus,
  title: 'organisms/Menus',
  argTypes: {},
} as Meta;

const Template: Story<MenusProps> = (args) => <Menus {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  data: nav.map((item) => ({
    text: item.text,
    href: item.href,
    isActive: false,
  })),
  onNavigate: () => {
    // SOMETHING
  },
};
