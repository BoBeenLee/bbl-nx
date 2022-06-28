import { render } from '@testing-library/react';

import TechStackCard from './tech-stack-card';

describe('TechStackCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TechStackCard groupName="Test" items={['t1', 't2', 't3']} />
    );
    expect(baseElement).toBeTruthy();
  });
});
