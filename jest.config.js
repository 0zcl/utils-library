module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  // 问题：jest没有es6的flat接口。解决：https://github.com/kulshekhar/ts-jest/issues/828#issuecomment-433976880
  setupFiles: ['core-js'],
  verbose: true
}
