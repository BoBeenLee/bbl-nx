import { Story, Meta } from '@storybook/react';
import { UiComponents, UiComponentsProps } from './ui-components';

export default {
  component: UiComponents,
  title: 'UiComponents',
} as Meta;

const Template: Story<UiComponentsProps> = (args) => <UiComponents {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
