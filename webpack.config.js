const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')

const env = dotenv.config().parsed

const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev
}, {})

module.exports = {
    devtool : 'inline-source-map',
    mode : 'development',
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname,'dist'),
        publicPath : '/',
        filename : 'bundle.js'
    },
    devServer : {
        port : 3000
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use : ['babel-loader']
            },
             {
                 test : /\.css$/,
                 exclude : /node_modules/,
                 use : ['style-loader', 'css-loader']
             }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : 'public/index.html'
        }),
        new webpack.DefinePlugin(envKeys)
    ],
    target : "electron-main"
};