import { nav } from '@bbl-nx/constants';
import { Story, Meta } from '@storybook/react';
import { NavFooter, NavFooterProps } from './nav-footer';

export default {
  component: NavFooter,
  title: 'molecules/NavFooter',
  argTypes: {},
} as Meta;

const Template: Story<NavFooterProps> = (args) => <NavFooter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: nav.map((item) => ({ text: item.text, href: item.href })),
  onNavigate: () => {
    // SOMETHING
  },
};
