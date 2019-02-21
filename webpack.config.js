const path = require('path')
const HWP = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'client.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new HWP({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    }
}