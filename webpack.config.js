const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map', // just do inline source maps instead of the default
  entry: ['bootstrap-loader', './src/index.js'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap'),
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      { test: /\.png$/, loader: 'url-loader?limit=100000' },
      { test: /\.jpg$/, loader: 'file-loader' },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file',
      },

      // // Use one of these to serve jQuery for Bootstrap scripts:
      //
      // // Bootstrap 4
      // { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
      //
      // Bootstrap 3
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    host: '0.0.0.0',
    hot: true,
    inline: true,
  },
};
