import rootMain from '../../jest.config.base';

/* eslint-disable */
export default {
  displayName: 'ui-components',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    ...rootMain.moduleNameMapper,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/ui-components',
  setupFiles: ['../../jest.setupTests.base.js'],
};
