import { Story, Meta } from '@storybook/react';
import { ExperienceCard, ExperienceCardProps } from './experience-card';

export default {
  component: ExperienceCard,
  title: 'organisms/Experiences/ExperienceCard',
  argTypes: {},
} as Meta;

const Template: Story<ExperienceCardProps> = (args) => (
  <ExperienceCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Test',
  caption: 'Test',
};
