import { Story, Meta } from '@storybook/react';
import { MobileMenus, MenusProps } from './mobile-menus';

export default {
  component: MobileMenus,
  title: 'organisms/MobileMenus',
  argTypes: {},
} as Meta;

const Template: Story<MenusProps> = (args) => <MobileMenus {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  open: true,
};
