'use strict';
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin =require("html-webpack-plugin");
const path = require("path");
const HandlebarsPlugin = require("handlebars-webpack-plugin");

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
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['public'] }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG:     JSON.stringify('ru')
        }),
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            chunks: ['main'],
            filename: 'index.html',
            template: path.join(__dirname, "view", "index.hbs"),
            inject: true
        }),
        new HandlebarsPlugin({
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
        })
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
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
        },{
            test: /\.css$/,
            include:  path.resolve( __dirname, 'frontend', 'styles', 'imports'),
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },{
            test: /\.(png|jpg|gif|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]'
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