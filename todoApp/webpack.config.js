const path = require('path'),
  APP_DIR = path.resolve(__dirname, 'src'),
  PUBLIC_DIR = path.resolve(__dirname, 'public'),
  config = {
    entry: `${APP_DIR}/index.jsx`,
    output: {
      path: PUBLIC_DIR,
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [{
          test: /\.jsx?/,
          include: APP_DIR,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loaders: ['style-loader?sourceMap', 'css-loader']
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader'
        }
      ]
    },
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true
    }
  }
module.exports = config;