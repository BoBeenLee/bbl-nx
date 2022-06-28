import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { HomeCard, HomeCardProps } from './home-card';

export default {
  component: HomeCard,
  title: 'molecules/HomeCard',
  argTypes: {},
} as Meta;

const Template: Story<HomeCardProps> = (args) => <HomeCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'BoBeen Lee',
  roleName: 'FrontEnd Developer',
  description: 'I Love Coding',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};
