import { Story, Meta } from '@storybook/react';
import { LineText, LineTextProps } from './line-text';

export default {
  component: LineText,
  title: 'Components/LinkText',
} as Meta;

const Template: Story<LineTextProps> = (args) => <LineText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
  children: 'Hello World',
};
