import { Story, Meta } from '@storybook/react';
import { LinkText, LinkTextProps } from './link-text';

export default {
  component: LinkText,
  title: 'LinkText',
} as Meta;

const Template: Story<LinkTextProps> = (args) => <LinkText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
};
