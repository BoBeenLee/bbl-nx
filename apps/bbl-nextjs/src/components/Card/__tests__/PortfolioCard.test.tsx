import { shallow } from 'enzyme';
import _ from 'lodash';
import React from 'react';
import { GoLink as LinkIcon, GoMarkGithub as GithubIcon } from 'react-icons/go';
import PortfolioCard from 'src/components/Card/PortfolioCard';

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
    const wrapper = shallow(<PortfolioCard {...minProps} />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders PortfolioCard without githubUrl', () => {
    const wrapper = shallow(<PortfolioCard {...minProps} githubUrl="" />);
    expect(wrapper.find(GithubIcon)).toHaveLength(0);
  });

  it('renders PortfolioCard without linkUrl', () => {
    const wrapper = shallow(<PortfolioCard {...minProps} linkUrl="" />);
    expect(wrapper.find(LinkIcon)).toHaveLength(0);
  });
});
