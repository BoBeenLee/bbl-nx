import _ from 'lodash';
import { skills } from '@bbl-nx/constants';
import { render } from '@testing-library/react';

import PortfolioCard from './portfolio-card';

describe('PortfolioCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PortfolioCard
        {...{
          name: 'flass',
          period: '2016-01 ~ 2017-01',
          skills: [
            'ReactJS',
            'React-Router',
            'Mocha',
            'Redux',
            'Material UI',
            'Webpack',
            'Sass',
            'Rails',
          ],
          allSkills: skills,
          summary: 'INTRO',
          portfolioImages: _.times(5, () => {
            return 'https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&w=256&h=256';
          }),
          githubUrl: '',
          linkUrl: '',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
