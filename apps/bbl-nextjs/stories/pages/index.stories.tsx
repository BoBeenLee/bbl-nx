import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import IndexPage from '../../src/pages/index';

export default {
  component: IndexPage,
  title: 'pages/Index',
  argTypes: {},
} as Meta;

const Template: Story = (args) => <IndexPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  asPath: '/index',
};

Primary.parameters = {
  nextRouter: {
    path: '/index',
    asPath: '/index',
  },
};
