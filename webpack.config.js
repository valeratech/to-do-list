const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name][contenthash].js",
        clean: true,
        assetModuleFilename: "[name][ext]"
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress:  true,
        historyApiFallback: true,
    },
    module: {  // module object
        rules: [  // rules array for each file type (ex. scss)
            { // add a test value as a regular expression (any files that end with this extension .scss)
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'], // apply loaders
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: "index.html",
            template: "src/template.html"
        }),
    ],
}
