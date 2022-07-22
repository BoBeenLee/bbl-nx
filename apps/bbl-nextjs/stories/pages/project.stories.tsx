import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import ProjectPage from '../../src/pages/project/index';

export default {
  component: ProjectPage,
  title: 'pages/Project',
  argTypes: {},
} as Meta;

const Template: Story = (args) => <ProjectPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  asPath: '/project',
};

Primary.parameters = {
  nextRouter: {
    path: '/project',
    asPath: '/project',
  },
};
