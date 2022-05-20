import { render } from '@testing-library/react';

import WithTistory from './with-tistory';

describe('WithTistory', () => {
  it('should render successfully', () => {
    const TargetComponent = WithTistory(() => <div />);
    const { baseElement } = render(<TargetComponent />);
    expect(baseElement).toBeTruthy();
  });
});
