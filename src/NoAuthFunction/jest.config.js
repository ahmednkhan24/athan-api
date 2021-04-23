module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/__tests__'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  }
};
