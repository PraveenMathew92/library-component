var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: __dirname + '/src/index.js',
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    output:{
        filename: 'transformed.js',
        path: __dirname + '/build',
        publicPath: "/"
    },
    devServer:{
        port: 4000,
        publicPath: '/',
        historyApiFallback: true
    },
    plugins: [HTMLWebpackPluginConfig]
};
