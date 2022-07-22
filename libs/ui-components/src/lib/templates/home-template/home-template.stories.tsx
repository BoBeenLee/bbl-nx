import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { within } from '@storybook/testing-library';
import LayoutTemplate from '../layout-template/layout-template';
import { HomeTemplate, HomeTemplateProps } from './home-template';

export default {
  component: HomeTemplate,
  title: 'templates/HomeTemplate',
  argTypes: {},
} as Meta;

const Template: Story<HomeTemplateProps> = (args) => (
  <LayoutTemplate
    {...{
      asPath: '/',
      onNavigate: action('onNavigate'),
    }}
  >
    <HomeTemplate {...args} />
  </LayoutTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};
