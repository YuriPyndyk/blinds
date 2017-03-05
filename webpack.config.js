'use strict';
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin =require("html-webpack-plugin");
const path = require("path");
const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
    context: __dirname + '/frontend',

    entry:  "./index.js",

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
            template: '../view/index.handlebars'
        }),
        new HandlebarsPlugin({
            entry: path.join(process.cwd(), "view", "index.handlebars"),
            output: path.join(process.cwd(), "public", "index.html"),
            data: require("./fixtures/index.json"),
            partials: [
                path.join(process.cwd(), "app", "src", "components", "*", "*.hbs")
            ],

            // register custom helpers. May be either a function or a glob-pattern
            // helpers: {
            //     nameOfHbsHelper: Function.prototype,
            //     projectHelpers: path.join(process.cwd(), "app", "helpers", "*.helper.js")
            // },

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
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel?presets[]=es2015'

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
            test:  /\.handlebars$/,
            loader: 'handlebars-loader'
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