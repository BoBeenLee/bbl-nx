import { Story, Meta } from '@storybook/react';
import { Loading, LoadingProps } from './loading';

export default {
  component: Loading,
  title: 'Atoms/Loading',
} as Meta;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 20
};
