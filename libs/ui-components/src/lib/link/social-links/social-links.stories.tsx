import { Story, Meta } from '@storybook/react';
import { SocialLinks, SocialLinksProps } from './social-links';

export default {
  component: SocialLinks,
  title: 'Components/SocialLinks',
} as Meta;

const Template: Story<SocialLinksProps> = (args) => <SocialLinks {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  description: 'hello',
  iconSize: 35,
  title: 'Components/hello world',
  url: 'http://bbl.netlify.com',
};
