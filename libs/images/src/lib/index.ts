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
  googlePlayButton: require('./assets/google-play.png'),
  octocat: require('./assets/octocat.png'),
  quokka: require('./assets/quokka.png'),
  storybook: require('./assets/storybook.png'),
};
