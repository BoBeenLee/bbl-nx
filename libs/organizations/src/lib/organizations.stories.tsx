import { Story, Meta } from '@storybook/react';
import { Organizations, OrganizationsProps } from './organizations';

export default {
  component: Organizations,
  title: 'Organizations',
} as Meta;

const Template: Story<OrganizationsProps> = (args) => (
  <Organizations {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
