const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ]
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
}
