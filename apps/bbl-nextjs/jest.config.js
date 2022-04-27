/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);

module.exports = {
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/src/__tests__/jest.globals.ts'],
  moduleDirectories: ['node_modules', path.resolve(__dirname)],
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
  testURL: `http://localhost`,
  testRegex: '(.*(test|spec))\\.(jsx?|tsx?)$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'src/__tests__/fileMock.ts',
  },
};
