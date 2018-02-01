const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const fs = require("fs")

const version = JSON.parse(fs.readFileSync("version.json"))

const gitRevisionPlugin = new GitRevisionPlugin()
const baseConfig = require('./base')
const root = path.resolve(__dirname, '../')

module.exports = merge(baseConfig, {
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
                FRONTEND: JSON.stringify(gitRevisionPlugin.version()),
                VERSION: JSON.stringify(version.version),
            },
        }),
        new UglifyJSPlugin({
            sourceMap: false,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module => {
                return module.resource && /node_modules/.test(module.resource)
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'client',
            async: 'chunk-vendor',
            children: true,
            minChunks: (module, count) => {
                // 被 3 个及以上 chunk 使用的共用模块提取出来
                return count >= 3
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:8].css',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime',
            minChunks: Infinity
        }),
    ],
})