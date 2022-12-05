const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './client/index.js',
    output: {
        
    },
    mode: process.env.NODE_ENV,
    
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, './dist'),
            publicPath: '/'
        },
        proxy: {
            '/': 'https://localhost:3000'
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
    plugins: [new HtmlWebpackPlugin({ template: './client/index.html' })],
};

module.exports = config;