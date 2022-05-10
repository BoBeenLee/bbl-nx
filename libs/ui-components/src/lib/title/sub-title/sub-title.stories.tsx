import { Story, Meta } from '@storybook/react';
import { SubTitle, SubTitleProps } from './sub-title';

export default {
  component: SubTitle,
  title: 'SubTitle',
} as Meta;

const Template: Story<SubTitleProps> = (args) => <SubTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Hello World',
};
