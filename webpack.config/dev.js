const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const baseConfig = require('./base')
const root = path.resolve(__dirname, '../')

module.exports = merge.smart(baseConfig, {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        path.join(root, 'src/index.js'),
    ],
    output: {
        filename: '[name].js'
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
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        "css-loader",
                        "less-loader",
                    ]
                })),
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
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(root, '../dist'),
        historyApiFallback: true,
        inline: true,
        compress: true,
        port: 33886,
        progress: true,
        hot: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"',
            },
        }),
        new ExtractTextPlugin({
            filename: 'output.css',
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
})