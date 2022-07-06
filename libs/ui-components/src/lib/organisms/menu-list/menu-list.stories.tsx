import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { MenuList, MenuListProps } from './menu-list';
import { nav } from '@bbl-nx/constants';

export default {
  component: MenuList,
  title: 'organisms/MenuList',
  argTypes: {},
} as Meta;

const Template: Story<MenuListProps> = (args) => <MenuList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  data: nav.map((item) => ({ text: item.text, href: item.href, isActive: false })),
  onNavigate: () => {
    // SOMETHING
  },
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};