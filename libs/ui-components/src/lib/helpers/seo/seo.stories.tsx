import { Story, Meta } from '@storybook/react';
import { SEO, SEOProps } from './seo';

export default {
  component: SEO,
  title: 'helpers/SEO',
  argTypes: {},
} as Meta;

const Template: Story<SEOProps> = (args) => <SEO {...args} />;

export const Primary = Template.bind({});
Primary.args = { asPath: '' };
