const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const root = path.resolve(__dirname, '../')

module.exports = {
    entry: path.join(root, 'src/index.js'),
    output: {
        path: path.join(root, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(root, 'index.html'),
            inject: 'body',
        })
    ],
}