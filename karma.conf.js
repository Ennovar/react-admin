const webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'], // run in Chrome
    singleRun: false, // just run once by default
    frameworks: ['mocha'], // use the mocha test framework
    files: [
      'tests.webpack.js', // just load this file
    ],
    preprocessors: {
      // preprocess with webpack and our sourcemap loader
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: ['dots'], // report results in this format
    webpack: { // kind of a copy of your webpack config
      devtool: 'inline-source-map', // just do inline source maps instead of the default
      entry: ['bootstrap-loader'],
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
            test: /\.css$/,
            loaders: [
              'style?sourceMap',
              'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            ],
          },
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
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
    },
    webpackServer: {
      noInfo: true, // please don't spam the console when running in karma!
    },
  });
};
