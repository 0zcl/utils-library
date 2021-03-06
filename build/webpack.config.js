const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    libraryTarget: 'umd',
    library: 'utilsLibrary',
    libraryExport: 'default',
    filename: 'utils-library.js',
    path: path.resolve(__dirname, '../dist')
  },
  // devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [{
          loader: 'ts-loader',
          options: {
            // 使用此选项，会关闭类型检查. 缩短使用 ts-loader 时的构建时间.
            transpileOnly: true,
            configFile: path.resolve(__dirname, '../tsconfig.json')
            // 给.vue文件加上.ts后缀，方便ts-loader处理
            // appendTsSuffixTo: [/\.vue$/]
          }
        }],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin()
  ]
}
