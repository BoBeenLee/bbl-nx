import { render } from '@testing-library/react';

import Skill from './skill';

describe('Skill', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Skill />);
    expect(baseElement).toBeTruthy();
  });
});
