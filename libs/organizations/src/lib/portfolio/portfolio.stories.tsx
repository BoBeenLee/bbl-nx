import { Story, Meta } from '@storybook/react';
import { Portfolio, PortfolioProps } from './portfolio';
import { companyPortfolios, teamPortfolios } from '@bbl-nx/constants';

export default {
  component: Portfolio,
  title: 'Organizations/Portfolio',
} as Meta;

const Template: Story<PortfolioProps> = (args) => <Portfolio {...args} />;

export const Company = Template.bind({});
Company.args = {
  title: 'Organizations/Company',
  portfolios: companyPortfolios,
};
export const Team = Template.bind({});
Team.args = {
  title: 'Organizations/Project',
  portfolios: teamPortfolios,
};
