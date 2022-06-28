import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { HomeTemplate, HomeTemplateProps } from './home-template';

export default {
  component: HomeTemplate,
  title: 'templates/HomeTemplate',
  argTypes: {},
} as Meta;

const Template: Story<HomeTemplateProps> = (args) => <HomeTemplate {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  asPath: "/",
  onNavigate: () => {
    // SOMETHING
  }
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};