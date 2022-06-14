import portfolioCompetition from './portfolio-competition';
import portfolioHouse from './portfolio-house';
import portfolioIntersection from './portfolio-intersection';
import portfolioMain from './portfolio-main';
import portfolioSkhualarm from './portfolio-skhualarm';
import portfolioSkhucalc from './portfolio-skhucalc';
import portfolioSofthome from './portfolio-softhome';

export const images = {
  mock: {
    board: require('./assets/__mocks__/board.png'),
  },
  portfolio: {
    competition: portfolioCompetition,
    house: portfolioHouse,
    intersection: portfolioIntersection,
    main: portfolioMain,
    skhualarm: portfolioSkhualarm,
    skhucalc: portfolioSkhucalc,
    softhome: portfolioSofthome,
  },
  githubIcon: require('./assets/github.svg'),
  googlePlayButton: require('./assets/google-play.png'),
  octocatIcon: require('./assets/octocat.png'),
  quokka: require('./assets/quokka.png'),
  closeIcon: require('./assets/x-circle.svg'),
  facebook: require('./assets/facebook.svg'),
  instagram: require('./assets/instagram.svg'),
  linkedin: require('./assets/linkedin.svg'),
  storybook: require('./assets/storybook.png'),
};
