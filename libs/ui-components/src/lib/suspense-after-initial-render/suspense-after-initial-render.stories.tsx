import { Story, Meta } from '@storybook/react';
import {
  SuspenseAfterInitialRender,
  SuspenseAfterInitialRenderProps,
} from './suspense-after-initial-render';

export default {
  component: SuspenseAfterInitialRender,
  title: 'Components/SuspenseAfterInitialRender',
} as Meta;

const Template: Story<SuspenseAfterInitialRenderProps> = (args) => (
  <SuspenseAfterInitialRender {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
