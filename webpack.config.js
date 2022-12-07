const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/': {
        target: 'http://localhost:8080/',
        router: () => 'http://localhost:3000',
      }
      
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.ejs$/,
        use: {
          loader: 'ejs-loader',
          options: {
            variable: 'data',
            interpolate : '\\{\\{(.+?)\\}\\}',
            evaluate : '\\[\\[(.+?)\\]\\]'
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  plugins: [
    new HtmlWebpackPlugin({ template: './client/html.ejs' })],
};

module.exports = config;
