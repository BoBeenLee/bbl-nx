import { Component } from 'react';

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  FallbackComponent: (props: { error: Error }) => JSX.Element;
}

export interface ErrorBoundaryStates {
  error: Error | null;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryStates
> {
  public states = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  public override componentDidUpdate(
    __: ErrorBoundaryProps,
    prevState: ErrorBoundaryStates
  ) {
    if (prevState.error && prevState.error === this.state.error) {
      this.setState({ error: null });
    }
  }

  public override render() {
    const { error } = this.state;

    if (error) {
      return <this.props.FallbackComponent error={error} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
