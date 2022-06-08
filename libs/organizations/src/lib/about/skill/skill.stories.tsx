import { Story, Meta } from '@storybook/react';
import { Skill, SkillProps } from './skill';

export default {
  component: Skill,
  title: 'Organizations/About/Skill',
} as Meta;

const Template: Story<SkillProps> = (args) => <Skill {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
