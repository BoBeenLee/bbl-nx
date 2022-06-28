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
  data: [
    {
      href: '/',
      text: 'Home',
      isActive: false,
    },
    {
      href: '/about',
      text: 'About',
      isActive: true,
    },
  ],
  onNavigate: () => {
    // SOMETHING
  },
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};
