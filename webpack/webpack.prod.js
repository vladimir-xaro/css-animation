const __PATH        = require('./paths');
const { merge }     = require('webpack-merge');
const common        = require('./webpack.common.js');

module.exports = merge(common, {
  mode:     'production',
  devtool:  'source-map',

  output: {
    path:           __PATH.build,
    publicPath:     '/',
    filename:       '[name].js',
    library:        '[name]',
    libraryTarget:  'umd',
    libraryExport:  'default',    // This option removes the `.default` after the build (see https://github.com/webpack/webpack/issues/3929)
    globalObject:   'this',
  },

  optimization: {
    minimize:   false,
  },
})
