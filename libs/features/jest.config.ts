/* eslint-disable */
import rootMain from '../../jest.config.base';

/* eslint-disable */
export default {
  displayName: 'features',
  preset: '../../jest.preset.js',
  globals: {},
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleNameMapper: {
    ...rootMain.moduleNameMapper,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/features',
  setupFiles: ['../../jest.setupTests.base.js'],
};
