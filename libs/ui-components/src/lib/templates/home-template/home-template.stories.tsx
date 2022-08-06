import { Story, Meta } from '@storybook/react';
import LayoutTemplate from '../layout-template/layout-template';
import { HomeTemplate, HomeTemplateProps } from './home-template';

export default {
  component: HomeTemplate,
  title: 'templates/HomeTemplate',
  argTypes: {},
} as Meta;

const Template: Story<HomeTemplateProps> = (args) => (
  <LayoutTemplate>
    <HomeTemplate {...args} />
  </LayoutTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};
