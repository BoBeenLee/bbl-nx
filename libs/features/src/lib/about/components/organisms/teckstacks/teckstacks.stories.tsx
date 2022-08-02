import { Story, Meta } from '@storybook/react';
import { TeckStacks } from './teckstacks';

export default {
  component: TeckStacks,
  title: 'organisms/TeckStacks',
  argTypes: {},
} as Meta;

const Template: Story = (args) => <TeckStacks {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
