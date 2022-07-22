import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { ALink, ALinkProps } from './alink';

export default {
  component: ALink,
  title: 'atoms/ALink',
  argTypes: {},
} as Meta;

const Template: Story<ALinkProps> = (args) => <ALink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: 'http://example.com',
  isExternal: true,
  children: 'Example',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};
