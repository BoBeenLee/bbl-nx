/* eslint-disable */
import rootMain from '../../jest.config.base';

/* eslint-disable */
export default {
  displayName: 'features',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    ...rootMain.moduleNameMapper,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/features',
  setupFiles: ['../../jest.setupTests.base.js'],
};
