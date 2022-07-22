import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { SectionTitle, SectionTitleProps } from './section-title';

export default {
  component: SectionTitle,
  title: 'atoms/SectionTitle',
  argTypes: {},
} as Meta;

const Template: Story<SectionTitleProps> = (args) => <SectionTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <div>Hello World</div>,
};
