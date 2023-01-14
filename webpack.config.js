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
    module: {  // module object
        rules: [  // rules array for each file type (ex. css)
            { // add a test value as a regular expression (any files that end with this extension .css)
                test: /\.css$/,
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
            title: '💩 To Doo-Doo List',
            filename: "index.html",
            template: "src/template.html"
        }),
    ],
}
