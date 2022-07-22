import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { PersonalPortfolios } from './personal-portfolios';

export default {
  component: PersonalPortfolios,
  title: 'organisms/PersonalPortfolios',
  argTypes: {},
} as Meta;

const Template: Story = (args) => <PersonalPortfolios {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};
