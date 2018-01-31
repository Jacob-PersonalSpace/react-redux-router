const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const root = path.resolve(__dirname, '../')

module.exports = {
    entry: {
        bundle: path.join(root, 'src/index.js'),
    },
    output: {
        path: path.join(root, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        "css-loader",
                        "less-loader",
                    ]
                }),
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['dist'],
            { root: path.resolve(__dirname, '..'), verbose: true }
        ),
        new HtmlWebpackPlugin({
            template: path.join(root, 'index.html'),
            inject: 'body',
        }),
    ],
}