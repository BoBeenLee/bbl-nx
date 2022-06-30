import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import LayoutTemplate from '../layout-template/layout-template';
import { ProjectTemplate, ProjectTemplateProps } from './project-template';

export default {
  component: ProjectTemplate,
  title: 'templates/ProjectTemplate',
  argTypes: {},
} as Meta;

const Template: Story<ProjectTemplateProps> = (args) => (
  <LayoutTemplate
    {...{
      asPath: '/',
      onNavigate: () => {
        // SOMETHING
      },
    }}
  >
    <ProjectTemplate {...args} />
  </LayoutTemplate>
);

export const Primary = Template.bind({});
Primary.args = {
  asPath: '/',
  onNavigate: () => {
    // SOMETHING
  },
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};