import { Story, Meta } from '@storybook/react';
import { Education, EducationProps } from './education';

export default {
  component: Education,
  title: 'About/Education',
} as Meta;

const Template: Story<EducationProps> = (args) => <Education {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
