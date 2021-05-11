const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode of the webpack, sets up a number predefined webpack properties
    mode: "development",
    entry: {
        // different bundles being created
        index: "./src/index.ts",
    },
    // helps with debugging by specifing what file is causing the error (without it is the bundle)
    devtool: "inline-source-map",
    // where to serve the files to
    devServer : {
        contentBase: './dist',
    },
    module: {
        rules: [
        {
            // all files which have extentsion ts or tsx use ts-loader
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title of the output html file
            title: 'Development',
            template: "./src/index.html"
        }),
    ],
    output: {
        // file name when a bundle is created 
        filename: '[name].bundle.js',
        // path of bundle being created
        path: path.resolve(__dirname, 'dist'),
        // to clear current dist folder content when new build happens
        clean: true,
    },
 };