import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Home, HomeProps } from './home';

export default {
  component: Home,
  title: 'molecules/Home',
  argTypes: {},
} as Meta;

const Template: Story<HomeProps> = (args) => <Home {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};