module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    { test: /\.css$/, loader: 'style-loader!css-loader' },
    { test: /\.(jpg|svg|png)$/, loader: 'file-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: './'
  },
  devtool: '#inline-source-map'

};
