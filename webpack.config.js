const path = require('path');
// const CompressionPlugin = require('compression-webpack-plugin');
// var BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      }
    ]
  }

  // ================================================================ //
              //brotli plugins for webpack compression//
  // ================================================================ //

  // },
  // plugins: [
  //   new CompressionPlugin({
  //     filename: '[path].gz[query]',
  //     algorithm: 'gzip',
  //     test: /\.js$|\.css$|\.html$/,
  //     threshold: 10240,
  //     minRatio: 0.8,
  //   }),
  //   new BrotliPlugin({
  //     asset: '[path].br[query]',
  //     test: /\.(js|css|html|svg)$/,
  //     threshold: 10240,
  //     minRatio: 0.8
  //   })
  // ],
};