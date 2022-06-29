import { Story, Meta } from '@storybook/react';
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
      onNavigate: () => {
        // SOMETHING
      },
    }}
  >
    <HomeTemplate {...args} />
  </LayoutTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};
