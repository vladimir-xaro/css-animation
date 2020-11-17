const __PATH = require('./paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    CSSClassAnimations: __PATH.src + '/index.ts',
  },


  module: {
    rules: [

      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          allowTsInNodeModules: true
        }
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        // options: {
        //   modules: 'umd',
        //   presets: [
        //     '@babel/preset-env',
        //     {
        //       esModules: false
        //     }
        //   ]
        // }
      },

      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }, {
            loader: 'sass-loader'
          }
        ]
      }

    ],
  },


  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],


  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },


  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss', '.json']
  }
}