import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { ProjectLinks, ProjectLinksProps } from './project-links';

export default {
  component: ProjectLinks,
  title: 'molecules/ProjectLinks',
  argTypes: {},
} as Meta;

const Template: Story<ProjectLinksProps> = (args) => <ProjectLinks {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  url: {
    github: 'https://example.com',
    link: 'https://example.com',
    googleStore: 'https://example.com',
    appStore: 'https://example.com',
    storybook: 'https://example.com',
  },
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};
