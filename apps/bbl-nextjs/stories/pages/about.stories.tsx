import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import AboutPage from '../../src/pages/about/index';

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

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};

Primary.parameters = {
  nextRouter: {
    path: '/about',
    asPath: '/about',
  },
};
