const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: path.resolve(__dirname, 'src/index.js'),
      dependOn: 'shared',
    },
    sketch: {
      import: path.resolve(__dirname, 'src/Link.js'),
      dependOn: 'shared',
    },
    shared: 'p5',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all'}
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  //loaders
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }, 
      {
        test: /\.(mp3|wav)$/i,
        type: "asset/resource",
      },
     
    ],
  },

  //plugins
  plugins: [
    new htmlWebpackPlugin({
    title: 'Linearizng Data',
    filename: 'index.html',
    template: path.resolve(__dirname, 'src/template.html'),
    }),
    new ESLintPlugin(),
  ],
};