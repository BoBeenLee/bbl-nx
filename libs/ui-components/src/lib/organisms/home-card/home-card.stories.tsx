import { home } from '@bbl-nx/constants';
import { Story, Meta } from '@storybook/react';
import { HomeCard, HomeCardProps } from './home-card';

export default {
  component: HomeCard,
  title: 'organisms/HomeCard',
  argTypes: {},
} as Meta;

const Template: Story<HomeCardProps> = (args) => <HomeCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...home,
};
