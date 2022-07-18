import { render } from '@testing-library/react';

import ExperienceCard from './experience-card';

describe('ExperienceCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ExperienceCard title={'test'} caption={'test'} />
    );
    expect(baseElement).toBeTruthy();
  });
});
