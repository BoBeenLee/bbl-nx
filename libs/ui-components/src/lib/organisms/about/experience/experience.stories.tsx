import { Story, Meta } from '@storybook/react';
import { Experience, ExperienceProps } from './experience';

export default {
  component: Experience,
  title: 'Organisms/About/Experience',
} as Meta;

const Template: Story<ExperienceProps> = (args) => <Experience {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
