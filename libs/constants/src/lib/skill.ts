export interface SkillItem {
  uri: string;
}

export const skills: { [key in string]: SkillItem } = {
  REACT_NATIVE: {
    uri: "https://facebook.github.io/react-native/"
  },
  NATIVEBASE: {
    uri: "https://nativebase.io/"
  },
  EXPO: {
    uri: "https://expo.io/"
  },
  REDUX_OFFLINE: {
    uri: "https://github.com/redux-offline/redux-offline"
  },
  REDUX: {
    uri: "https://redux.js.org/"
  },
  REDUX_SAGA: {
    uri: "https://github.com/redux-saga/redux-saga"
  },
  STORYBOOK: {
    uri: "https://storybook.js.org/"
  },
  REACT: {
    uri: "https://reactjs.org/"
  },
  REACT_ROUTER: {
    uri: "https://github.com/ReactTraining/react-router"
  },
  MOCHA: {
    uri: "https://mochajs.org/"
  },
  WEBPACK: {
    uri: "https://webpack.js.org/"
  },
  SASS: {
    uri: "https://sass-lang.com/libsass"
  },
  RAILS: {
    uri: "https://rubyonrails.org/"
  },
  ANDROID: {
    uri: "https://www.android.com/"
  },
  STYLED_COMPONENTS: {
    uri: "https://www.styled-components.com/"
  },
  MOBX_STATE_TREE: {
    uri: "https://github.com/mobxjs/mobx-state-tree"
  },
  MOBX: {
    uri: "https://github.com/mobxjs/mobx"
  },
  REACT_NATIVE_NAVIGATION_V2: {
    uri: "https://wix.github.io/react-native-navigation/v2/#/"
  },
  ANTD: {
    uri: "https://ant.design/docs/react/getting-started"
  },
  TYPESCRIPT: {
    uri: "https://www.typescriptlang.org/"
  },
  APPCENTER: {
    uri: "https://appcenter.ms/apps"
  },
  GATSBY: {
    uri: "https://www.gatsbyjs.org/"
  }
};

export interface CategorySkillsItem {
  name: string;
  skills: string[];
  uri?: string;
}

export const categorySkills: { [key in string]: CategorySkillsItem } = {
  frontend: {
    name: "Front End",
    skills: [
      "react",
      "react native",
      "javascript",
      "typescript",
      "jQuery",
      "sass",
      "android"
    ]
  },
  backend: {
    name: "Back End",
    skills: ["nodejs", "graphql", "spring framework", "spring boot"]
  },
  db: { name: "DB", skills: ["RDB", "mongodb", "firebase"] },
  collaboration: {
    name: "Collaboration",
    skills: [
      "github",
      "gitlab",
      "slack",
      "notion",
      "jira",
      "trello",
      "teamviewer"
    ]
  },
  usage: { name: "Usage", skills: ["aws ec2, s3", "docker"] },
  tool: {
    name: "Tools",
    skills: [
      "vscode",
      "gitkraken",
      "reactotron",
      "insomnia",
      "intellj idea",
      "webstorm",
      "android studio",
      "source tree",
      "zeplin",
      "fork",
      "miro"
    ]
  }
};
