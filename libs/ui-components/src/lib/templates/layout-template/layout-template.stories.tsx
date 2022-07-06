import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { LayoutTemplate, LayoutTemplateProps } from './layout-template';

export default {
  component: LayoutTemplate,
  title: 'templates/LayoutTemplate',
  argTypes: {},
} as Meta;

const Template: Story<LayoutTemplateProps> = (args) => (
  <LayoutTemplate {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: <div>Hello World</div>,
  onNavigate: action('onNavigate'),
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};
