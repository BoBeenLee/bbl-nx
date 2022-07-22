import { Story, Meta } from '@storybook/react';
import { Experiences } from './experiences';

export default {
  component: Experiences,
  title: 'organisms/Experiences',
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Experiences {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
