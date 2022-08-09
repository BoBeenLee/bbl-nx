import { Story, Meta } from '@storybook/react';
import { ALink, ALinkProps } from './alink';

export default {
  component: ALink,
  title: 'atoms/ALink',
  argTypes: {},
} as Meta;

const Template: Story<ALinkProps> = (args) => <ALink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: 'text-gray-500',
  href: 'http://example.com',
  isExternal: true,
  children: 'Example',
};
