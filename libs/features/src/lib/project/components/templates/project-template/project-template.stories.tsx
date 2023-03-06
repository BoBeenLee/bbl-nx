import { Story, Meta } from '@storybook/react';
import { LayoutTemplate } from '@bbl-nx/ui-components/templates';
import { ProjectTemplate } from './project-template';

export default {
  component: ProjectTemplate,
  title: 'templates/ProjectTemplate',
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <LayoutTemplate>
    <ProjectTemplate {...args} />
  </LayoutTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};
