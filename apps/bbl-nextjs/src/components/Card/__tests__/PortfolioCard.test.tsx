import React from 'react';
import { render } from '@testing-library/react';
import _ from 'lodash';
import PortfolioCard from '@bbl-nextjs/components/Card/PortfolioCard';

describe('Component: PortfolioCard', () => {
  const minProps = {
    githubUrl: '',
    portfolioImages: [],
    linkUrl: '',
    name: '',
    onImagePopup: _.identity,
    period: '',
    skills: [],
    summary: '',
  };

  it('renders PortfolioCard without exploding', () => {
    const wrapper = render(<PortfolioCard {...minProps} />);
    expect(wrapper).toHaveLength(1);
  });
});
