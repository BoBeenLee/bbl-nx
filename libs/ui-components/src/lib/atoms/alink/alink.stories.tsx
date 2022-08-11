import { Story, Meta } from '@storybook/react';
import { ALink, ALinkProps } from './alink';

export default {
  component: ALink,
  title: 'atoms/ALink',
  argTypes: {},
} as Meta;

const Template: Story<ALinkProps<'/'>> = (args) => <ALink {...args} href="/" />;

export const Primary = Template.bind({});
Primary.args = {
  className: 'text-gray-500',
  urlPath: '/',
  children: 'Home',
};
