import { Story, Meta } from '@storybook/react';
import { TeamPortfolios } from './team-portfolios';

export default {
  component: TeamPortfolios,
  title: 'organisms/TeamPortfolios',
  argTypes: {},
} as Meta;

const Template: Story = (args) => <TeamPortfolios {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
