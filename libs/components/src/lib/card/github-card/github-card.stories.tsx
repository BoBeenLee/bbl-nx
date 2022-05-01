import { Story, Meta } from '@storybook/react';
import { GithubCard, GithubCardProps } from './github-card';

export default {
  component: GithubCard,
  title: 'GithubCard',
} as Meta;

const Template: Story<GithubCardProps> = (args) => <GithubCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: '',
  description: '',
  date: '',
  url: '',
};
