import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { MobileNav, MobileNavProps } from './mobile-nav';
import { nav } from '@bbl-nx/constants';

export default {
  component: MobileNav,
  title: 'organisms/MobileNav',
  argTypes: {},
} as Meta;

const Template: Story<MobileNavProps> = (args) => <MobileNav {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: nav.map((item) => ({ ...item, isActive: false })),
  onNavigate: () => {
    // SOMETHING
  },
};
