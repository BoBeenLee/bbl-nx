import { Story, Meta } from '@storybook/react';
import { ExternalLink, ExternalLinkProps } from './external-link';

export default {
  component: ExternalLink,
  title: 'atoms/ExternalLink',
  argTypes: {},
} as Meta;

const Template: Story<ExternalLinkProps> = (args) => <ExternalLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: 'http://example.com',
  children: 'example',
};
