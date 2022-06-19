import { Story, Meta } from '@storybook/react';
import { Layout, LayoutProps } from './layout';

export default {
  component: Layout,
  title: 'Templates/Layout',
} as Meta;

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {};