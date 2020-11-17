const __PATH    = require('./paths');
const { merge } = require('webpack-merge');
const common    = require('./webpack.common.js');

module.exports = merge(common, {
  mode:     'development',
  devtool:  'source-map',

  entry: {
    CSSClassAnimations: __PATH.src + '/index.dev.ts',
  },

  output: {
    path:           __PATH.dev,
    publicPath:     '/',
    filename:       '[name].dev.js',
    library:        '$',
    libraryTarget:  'umd',
    umdNamedDefine: true,
    libraryExport:  'default'
  }
})
