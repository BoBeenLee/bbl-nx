import { Story, Meta } from '@storybook/react';
import { Seperator, SeperatorProps } from './seperator';

export default {
  component: Seperator,
  title: 'Seperator',
} as Meta;

const Template: Story<SeperatorProps> = (args) => <Seperator {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
