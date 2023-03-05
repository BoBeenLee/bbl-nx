import { Story, Meta } from '@storybook/react';
import AboutPage from '../../src/_pages/about/index';

export default {
  component: AboutPage,
  title: 'pages/About',
  argTypes: {},
} as Meta;

const Template: Story = (args) => <AboutPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  asPath: '/about',
};

Primary.parameters = {
  nextRouter: {
    path: '/about',
    asPath: '/about',
  },
};
