export default {
  displayName: 'api-gateway',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: 'test-output/jest/coverage',
  moduleNameMapper: {
    '^@dreckly/data-access$': '<rootDir>/src/__mocks__/data-access.ts',
    '^@dreckly/shared-types$': '<rootDir>/src/__mocks__/shared-types.ts',
  },
};
