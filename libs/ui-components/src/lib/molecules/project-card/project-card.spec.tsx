import { render } from '@testing-library/react';

import ProjectCard from './project-card';

describe('ProjectCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProjectCard
        name="test"
        period="2014"
        techStacks={[]}
        summary={'summary'}
        IconComponent={null}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
