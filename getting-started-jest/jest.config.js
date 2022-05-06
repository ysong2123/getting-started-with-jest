module.exports = {
  "preset": "ts-jest",
      "testEnvironment": "node",
      "transform": {
        "node_modules/@mui/.+\\.(j|t)sx?$": "ts-jest"
      },
      "transformIgnorePatterns": [
        "node_modules/(?!@mui/.*)","(?!__tests__/)"
      ]
};