import { Story, Meta } from '@storybook/react';
import { MobileNav } from './mobile-nav';

export default {
  component: MobileNav,
  title: 'organisms/MobileNav',
  argTypes: {},
  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
  },
} as Meta;

const Template: Story = (args) => <MobileNav {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
