import { Story, Meta } from '@storybook/react';
import { SocialLinks, SocialLinksProps } from './social-links';

export default {
  component: SocialLinks,
  title: 'SocialLinks',
} as Meta;

const Template: Story<SocialLinksProps> = (args) => <SocialLinks {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
  url: '',
  title: '',
  description: '',
  iconSize: 0,
};
