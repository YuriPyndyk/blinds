'use strict';
const browserSyncPlugin = require('browser-sync-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin =require('html-webpack-plugin');
const path = require('path');
const handlebarsPlugin = require('handlebars-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const webpackDevServer = require('webpack-dev-server');

module.exports = {
    
    entry: {
        main: './frontend/index.js'
    },

    output: {
        path: 'public',
        filename: "[name].js",
        library: "[name]"
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? "source-map" : null,

    plugins: [
        // new browserSyncPlugin({
        //     host: 'localhost',
        //     port: 3000,
        //     server: { baseDir: ['public'] }
        // }),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG:     JSON.stringify('ru')
        }),
        new extractTextPlugin('styles.css', {
            allChunks: true
        }),
        new htmlWebpackPlugin({
            chunks: ['main'],
            filename: 'index.html',
            template: path.join(__dirname, "view", "index.hbs"),
            inject: true
        }),
        new handlebarsPlugin({
            chunks: ['main'],
            entry: path.join(process.cwd(), "view", "index.hbs"),
            output: path.join(process.cwd(), "public", "index.html"),
            data: require("./fixtures/index.json"),
            partials: [
                path.join(process.cwd(), "app", "src", "components", "*", "*.hbs")
            ],

            // register custom helpers. May be either a function or a glob-pattern
            helpers: {
                nameOfHbsHelper: Function.prototype,
                projectHelpers: path.join(process.cwd(), "app", "helpers", "*.helper.js")
            },

            // hooks
            onBeforeSetup: function (Handlebars) {},
            onBeforeAddPartials: function (Handlebars, partialsMap) {},
            onBeforeCompile: function (Handlebars, templateContent) {},
            onBeforeRender: function (Handlebars, data) {},
            onBeforeSave: function (Handlebars, resultHtml) {},
            onDone: function (Handlebars) {}
        }),
        new copyWebpackPlugin([
            {
                from: 'frontend/images', to: 'images'
            }
        ])
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {
        htmlLoader: {
            ignoreCustomFragments: [/\{\{.*?}}/],
            root: path.resolve(__dirname, 'index'),
            attrs: ['img:src', 'link:href']
        },
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel?presets[]=es2015&presets[]=stage-0&presets[]=stage-1'

        },{
            test: /\.scss$/,
            include:  path.resolve( __dirname, 'frontend', 'styles'),
            loader: extractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
        },{
            test: /\.css$/,
            include:  path.resolve( __dirname, 'frontend', 'styles', 'imports'),
            loader: extractTextPlugin.extract('style-loader', 'css-loader')
        },{
            test: /\.(png|jpg|gif|ttf|eot|woff|woff2)$/,
            loader: 'file?name=images/[name].[ext]'
        },{
            test: /\.hbs$/,
            loader: "handlebars-template-loader",
            query: {
                attributes: ['img:src', 'x-img:src']
            }
        },{
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        contentBase: 'public',
        inline: true,
        hot: true,
        historyApiFallback: true
    }
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}