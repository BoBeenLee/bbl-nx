import { render } from '@testing-library/react';

import WithRotate from './with-rotate';

describe('WithRotate', () => {
  it('should render successfully', () => {
    const TargetComponent = WithRotate(() => <div />);
    const { baseElement } = render(<TargetComponent />);
    expect(baseElement).toBeTruthy();
  });
});
