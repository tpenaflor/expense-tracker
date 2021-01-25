const path = require('path')
const ExtractTextPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    const CSSExtract = new ExtractTextPlugin({filename: 'styles.css'})
    return {
        entry : "./src/app.js",
        // entry : "./src/playgroud/hoc.js",
        output : {
            path : path.join(__dirname, "public"),
            filename :"app.js"
        },
        module : {
            rules : [
            {
                loader:"babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use : [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    ],
                test: /\.s?css$/
            }]
        },
        plugins :[
            CSSExtract
        ],
        devtool: 'source-map',
        devServer : {
            contentBase : path.join(__dirname, "public"),
            historyApiFallback: true
        }

    }
};

