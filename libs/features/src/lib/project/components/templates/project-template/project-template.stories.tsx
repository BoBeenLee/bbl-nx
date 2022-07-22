import { Story, Meta } from '@storybook/react';
import { LayoutTemplate } from '@bbl-nx/ui-components';
import { ProjectTemplate } from './project-template';

export default {
  component: ProjectTemplate,
  title: 'templates/ProjectTemplate',
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
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
