import { Story, Meta } from '@storybook/react';
import { ErrorBoundary, ErrorBoundaryProps } from './error-boundary';

export default {
  component: ErrorBoundary,
  title: 'helpers/ErrorBoundary',
  argTypes: {},
} as Meta;

const Template: Story<ErrorBoundaryProps> = (args) => (
  <ErrorBoundary {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  FallbackComponent: ({ error }) => <div>{error.message}</div>,
};
