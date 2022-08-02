import { Story, Meta } from '@storybook/react';
import { ErrorBoundary, ErrorBoundaryProps } from './error-boundary';

export default {
  component: ErrorBoundary,
  title: 'helpers/ErrorBoundary',
  argTypes: {},
} as Meta;


function ErrorComponent() {
  throw new Error("Error: Error Testing");
  return <div />
}

const Template: Story<ErrorBoundaryProps> = (args) => (
  <ErrorBoundary {...args} >
    <ErrorComponent />
  </ErrorBoundary>
);

export const Primary = Template.bind({});
Primary.args = {
  FallbackComponent: ({ error }) => <div>{error.message}</div>,
};
