import { render } from '@testing-library/react';

import ErrorBoundary from './error-boundary';

describe('ErrorBoundary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ErrorBoundary FallbackComponent={() => <div>Fallback</div>}>
        <div />
      </ErrorBoundary>
    );
    expect(baseElement).toBeTruthy();
  });
});
