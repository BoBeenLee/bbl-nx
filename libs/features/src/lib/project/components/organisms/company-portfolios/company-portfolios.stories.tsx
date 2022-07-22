import { Story, Meta } from '@storybook/react';
import { CompanyPortfolios } from './company-portfolios';

export default {
  component: CompanyPortfolios,
  title: 'organisms/CompanyPortfolios',
  argTypes: {},
} as Meta;

const Template: Story = (args) => <CompanyPortfolios {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
