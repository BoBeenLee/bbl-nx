import _ from 'lodash';
import { Story, Meta } from '@storybook/react';
import { PortfolioCard, PortfolioCardProps } from './portfolio-card';
import { skills } from '@bbl-nx/constants';

export default {
  component: PortfolioCard,
  title: 'Molecules/Card/PortfolioCard',
  argTypes: {},
} as Meta;

const Template: Story<PortfolioCardProps> = (args) => (
  <PortfolioCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
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
};
