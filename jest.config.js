const path = require('path');

module.exports = {
  roots: [path.resolve(__dirname, './src')],
  displayName: {
    name: 'LOCAL',
    color: 'blue',
  },
  testMatch: ['**/*.test.js'],
  testURL: 'http://localhost',
  setupFilesAfterEnv: [path.resolve(__dirname, './src/setupTests.js')],
  moduleNameMapper: {
    '\\.(sa|sc|c)ss$': 'identity-obj-proxy',
  },
};
