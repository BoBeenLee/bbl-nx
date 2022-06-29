import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { DarkModeButton, DarkModeButtonProps } from './dark-mode-button';

export default {
  component: DarkModeButton,
  title: 'molecules/DarkModeButton',
  argTypes: {},
} as Meta;

const Template: Story<DarkModeButtonProps> = (args) => <DarkModeButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};