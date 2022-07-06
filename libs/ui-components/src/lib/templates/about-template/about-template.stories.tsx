import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import LayoutTemplate from '../layout-template/layout-template';
import { AboutTemplate, AboutTemplateProps } from './about-template';

export default {
  component: AboutTemplate,
  title: 'templates/AboutTemplate',
  argTypes: {},
} as Meta;

const Template: Story<AboutTemplateProps> = (args) => (
  <LayoutTemplate
    {...{
      asPath: '/',
      onNavigate: action('onNavigate'),
    }}
  >
    <AboutTemplate {...args} />
  </LayoutTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};
