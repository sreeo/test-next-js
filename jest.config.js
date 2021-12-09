module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['.next', 'coverage'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/components$1',
    '^@pages(.*)$': '<rootDir>/pages$1'
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
}
