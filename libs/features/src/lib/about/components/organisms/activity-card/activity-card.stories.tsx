import { Story, Meta } from '@storybook/react';
import { ActivityCard, ActivityCardProps } from './activity-card';

export default {
  component: ActivityCard,
  title: 'organisms/Activities/ActivityCard',
  argTypes: {},
} as Meta;

const Template: Story<ActivityCardProps> = (args) => (
  <div className="flex w-full">
    <ActivityCard {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Test',
  caption: 'Test',
};
