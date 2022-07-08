import { home } from '@bbl-nx/constants';
import { render } from '@testing-library/react';

import HomeCard from './home-card';

describe('HomeCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeCard {...home} />);
    expect(baseElement).toBeTruthy();
  });
});
