import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { TeckStacks, TeckStacksProps } from './teckstacks';

export default {
  component: TeckStacks,
  title: 'organisms/TeckStacks',
  argTypes: {},
} as Meta;

const Template: Story<TeckStacksProps> = (args) => <TeckStacks {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};