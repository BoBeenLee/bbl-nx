import { render } from '@testing-library/react';

import ProjectTemplate from './project-template';

describe('ProjectTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
