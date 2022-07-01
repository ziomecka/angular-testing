module.exports =  {
  testPathIgnorePatterns: [
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/e2e/',
    '<rootDir>/node_modules/',
    '<rootDir>/src/app/*.(js|scss)'
  ],
  testMatch: [
    '<rootDir>/src/app/*.spec.ts',
    '<rootDir>/src/app/**/*.spec.ts'
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json'
    }
  },
  setupFiles: ['<rootDir>/jest.setup.ts']
  ,testEnvironment: 'jsdom'
};
