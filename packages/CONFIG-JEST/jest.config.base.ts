// import { defaults } from 'ts-jest/presets';

export default {
  preset: 'ts-jest',
  verbose: true,
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules/'],
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: '<rootDir>/../../babel.test.config.js' }],
  // },
  moduleDirectories: ['node_modules']
  // moduleNameMapper: {
  //   '\\.(css|scss|less)$': '<rootDir>/../../test/styleMock.js',
  // },
  // transformIgnorePatterns: ['/node_modules/(?!@moveinc/rdc-app-context),(?!@moveinc/rdc-app-shell)'],
};
