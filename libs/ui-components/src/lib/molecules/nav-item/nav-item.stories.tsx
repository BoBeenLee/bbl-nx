import { Story, Meta } from '@storybook/react';
import { NavItem, NavItemProps } from './nav-item';
import { nav } from '@bbl-nx/constants';
import { action } from '@storybook/addon-actions';

export default {
  component: NavItem,
  title: 'molecules/NavItem',
  argTypes: {},
} as Meta;

const Template: Story<NavItemProps> = (args) => <NavItem {...args} />;

export const Inactive = Template.bind({});
export const Active = Template.bind({});

const item = nav[0];
Inactive.args = {
  href: item?.href ?? '',
  text: item?.text ?? '',
};
Active.args = {
  href: item?.href ?? '',
  text: item?.text ?? '',
};
