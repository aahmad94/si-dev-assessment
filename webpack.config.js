const webpack = require('webpack');
var path = require("path");

// if using any plugins for either dev and production
var plugins = []; 

// if using any plugins for development
var devPlugins = [
  new webpack.HotModuleReplacementPlugin() // used along w/ react-hotloader
]; 

// if using any plugins for production
// w/ Webpack 4, don't need to specify minimize/uglifyJs
var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);


module.exports = {
  entry: [
    'react-hot-loader/patch',
    './client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: plugins,
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true
  }
};
