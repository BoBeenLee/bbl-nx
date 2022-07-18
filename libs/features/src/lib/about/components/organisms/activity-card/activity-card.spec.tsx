import { render } from '@testing-library/react';

import ActivityCard from './activity-card';

describe('ActivityCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ActivityCard title={'test'} caption={'test'} />
    );
    expect(baseElement).toBeTruthy();
  });
});
