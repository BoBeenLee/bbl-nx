import rootMain from '../../jest.config.base';

/* eslint-disable */
export default {
  displayName: 'organizations',
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
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/../../__tests__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/../../__tests__/fileMock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/organizations',
  setupFiles: ['../../jest.setupTests.base.js'],
};
