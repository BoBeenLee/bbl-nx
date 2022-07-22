import { nav } from '@bbl-nx/constants';
import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Nav, NavProps } from './nav';

export default {
  component: Nav,
  title: 'molecules/Nav',
  argTypes: {},
} as Meta;

const Template: Story<NavProps> = (args) => <Nav {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: nav.map((item) => ({
    text: item.text,
    href: item.href,
    isActive: false,
  })),
  onNavigate: () => {
    // SOMETHING
  },
};
