const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    sketch: {
      import: './src/sketch.js',
      dependOn: 'shared',
    },
    shared: './src/p5/p5.min.js',

  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
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
      {
        test: /\.wav$/,
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