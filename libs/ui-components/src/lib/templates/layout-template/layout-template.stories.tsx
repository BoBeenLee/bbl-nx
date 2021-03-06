import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
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
