import rootMain from '../../jest.config.base';

/* eslint-disable */
export default {
  displayName: 'organizations',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    ...rootMain.moduleNameMapper,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/organizations',
  setupFiles: ['../../jest.setupTests.base.js'],
};
