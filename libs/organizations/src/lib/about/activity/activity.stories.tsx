import { Story, Meta } from '@storybook/react';
import { Activity, ActivityProps } from './activity';

export default {
  component: Activity,
  title: 'Organizations/About/Activity',
} as Meta;

const Template: Story<ActivityProps> = (args) => <Activity {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
