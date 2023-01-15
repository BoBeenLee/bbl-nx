export const skills: Record<string, { uri: string }> = {
  REACT_NATIVE: {
    uri: 'https://facebook.github.io/react-native/',
  },
  NATIVEBASE: {
    uri: 'https://nativebase.io/',
  },
  EXPO: {
    uri: 'https://expo.io/',
  },
  REDUX_OFFLINE: {
    uri: 'https://github.com/redux-offline/redux-offline',
  },
  REDUX: {
    uri: 'https://redux.js.org/',
  },
  REDUX_SAGA: {
    uri: 'https://github.com/redux-saga/redux-saga',
  },
  STORYBOOK: {
    uri: 'https://storybook.js.org/',
  },
  REACT: {
    uri: 'https://reactjs.org/',
  },
  REACT_ROUTER: {
    uri: 'https://github.com/ReactTraining/react-router',
  },
  MOCHA: {
    uri: 'https://mochajs.org/',
  },
  WEBPACK: {
    uri: 'https://webpack.js.org/',
  },
  SASS: {
    uri: 'https://sass-lang.com/libsass',
  },
  RAILS: {
    uri: 'https://rubyonrails.org/',
  },
  ANDROID: {
    uri: 'https://www.android.com/',
  },
  STYLED_COMPONENTS: {
    uri: 'https://www.styled-components.com/',
  },
  MOBX_STATE_TREE: {
    uri: 'https://github.com/mobxjs/mobx-state-tree',
  },
  MOBX: {
    uri: 'https://github.com/mobxjs/mobx',
  },
  RECOIL: {
    uri: 'https://recoiljs.org/',
  },
  REACT_NATIVE_NAVIGATION_V2: {
    uri: 'https://wix.github.io/react-native-navigation/v2/#/',
  },
  ANTD: {
    uri: 'https://ant.design/docs/react/getting-started',
  },
  TYPESCRIPT: {
    uri: 'https://www.typescriptlang.org/',
  },
  APPCENTER: {
    uri: 'https://appcenter.ms/apps',
  },
  GATSBY: {
    uri: 'https://www.gatsbyjs.org/',
  },
};

export type CategorySkillsItem = {
  name: string;
  skills: string[];
  uri?: string;
};

export const categorySkills: Record<string, CategorySkillsItem> = {
  frontend: {
    name: 'Frontend',
    skills: ['React', 'React Native', 'Javascript', 'Typescript', 'JQuery'],
  },
  framework: {
    name: 'Framework',
    skills: ['Nextjs', 'Gatsby', 'React Native CLI', 'Expo'],
  },
  uicomponent: {
    name: 'UI Component',
    skills: [
      'Storybook',
      'Material UI (mui)',
      'Antd',
      'Native Base, React Bootstrap',
    ],
  },
  style: {
    name: 'Styling',
    skills: ['Emotion', 'Styled-components', 'Less', 'Sass'],
  },
  statemanagement: {
    name: 'State Management',
    skills: [
      'Mobx',
      'Mobx State Tree',
      'XState',
      'Redux',
      'Redux Saga',
      'React Query',
      'React Apollo',
    ],
  },
  navigation: {
    name: 'Navigation',
    skills: ['React Router', 'React Navigation', 'React Native Navigation'],
  },
  backend: {
    name: 'Backend',
    skills: [
      'Express',
      'GraphQL',
      'Serverless',
      'Spring Framework',
      'Spring Boot',
    ],
  },
  db: {
    name: 'DB',
    skills: [
      'RDB (MySQL, MariaDB, PostgreSQL)',
      'Prisma',
      'Mongodb',
      'Dynamodb',
    ],
  },
  buildsystem: {
    name: 'Build System',
    skills: ['Nx.dev', 'Lerna'],
  },
  collaboration: {
    name: 'Collaboration',
    skills: ['Linear', 'Notion', 'Workspace', 'Slack', 'JIRA', 'Trello'],
  },
  // usage: { name: 'Usage', skills: ['aws ec2, s3', 'docker'] },
  deployment: {
    name: 'Deployment',
    skills: ['Code Push', 'Fastlane'],
  },
  ci: {
    name: 'CI',
    skills: ['Github Action'],
  },
};

export const categorySkillArray = Object.values(categorySkills);