import { Story, Meta } from '@storybook/react';
import { Portfolio, PortfolioProps } from './portfolio';

export default {
  component: Portfolio,
  title: 'Portfolio',
} as Meta;

const Template: Story<PortfolioProps> = (args) => <Portfolio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: '',
};
