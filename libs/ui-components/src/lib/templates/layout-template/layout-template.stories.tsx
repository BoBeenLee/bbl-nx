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
  children: <div className="pb-4 m-auto">Hello World</div>,
};
