import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { AboutTemplate, AboutTemplateProps } from './about-template';

export default {
  component: AboutTemplate,
  title: 'templates/AboutTemplate',
  argTypes: {},
} as Meta;

const Template: Story<AboutTemplateProps> = (args) => <AboutTemplate {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};