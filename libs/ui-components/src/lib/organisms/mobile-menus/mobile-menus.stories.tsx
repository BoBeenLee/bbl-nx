import { Story, Meta } from '@storybook/react';
import { MobileMenus, MenusProps } from './mobile-menus';
import { nav } from '@bbl-nx/constants';
import { action } from '@storybook/addon-actions';

export default {
  component: MobileMenus,
  title: 'organisms/MobileMenus',
  argTypes: {},
} as Meta;

const Template: Story<MenusProps> = (args) => <MobileMenus {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  data: nav.map((item) => ({
    text: item.text,
    href: item.href,
    isActive: false,
  })),
  onNavigate: action('onNavigate'),
};
