import type { Config } from 'jest';

const config = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'ts', 'json'],
  rootDir: 'tests',
  testRegex: '.*\\.spec\\.ts$',
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
} satisfies Config;

export default config;
