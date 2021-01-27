const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'Local'
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`})

module.exports = () => {
    const CSSExtract = new ExtractTextPlugin({filename: 'styles.css'})
    return {
        entry : "./src/app.js",
        // entry : "./src/playgroud/hoc.js",
        output : {
            path : path.join(__dirname, "public", "dist"),
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
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.WHERE' : JSON.stringify(process.env.NODE_ENV),
                'process.env.FB_API_KEY' : JSON.stringify(process.env.FB_API_KEY),
                'process.env.FB_AUTH_DOMAIN' : JSON.stringify(process.env.FB_AUTH_DOMAIN),
                'process.env.FB_DATABSE_URL' : JSON.stringify(process.env.FB_DATABSE_URL),
                'process.env.FB_PROJECT_ID' : JSON.stringify(process.env.FB_PROJECT_ID),
                'process.env.FB_STORGE_BUCKET' : JSON.stringify(process.env.FB_STORGE_BUCKET),
                'process.env.FB_MESSAGING_SENDER_ID' : JSON.stringify(process.env.FB_MESSAGING_SENDER_ID),
                'process.env.FB_APP_ID' : JSON.stringify(process.env.FB_APP_ID),
                'process.env.FB_MEASUREMENT_ID' : JSON.stringify(process.env.FB_MEASUREMENT_ID)
            })
        ],
        devtool: 'source-map',
        devServer : {
            contentBase : path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath : '/dist/'
        }

    }
};

