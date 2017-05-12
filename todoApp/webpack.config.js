const path = require('path');
const APP_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const config = {
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
