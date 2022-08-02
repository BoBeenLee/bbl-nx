import { Story, Meta } from '@storybook/react';
import { Activities } from './activities';

export default {
  component: Activities,
  title: 'organisms/Activities',
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Activities {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: 'w-full',
};
