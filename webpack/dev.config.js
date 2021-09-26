const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommon = require('./common.config');

const env = require('../env');
const proxyRules = require('../proxy/rules');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = merge(webpackCommon, {
	devtool: 'inline-source-map',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../static/dist'),

		sourceMapFilename: '[name].map',

		chunkFilename: '[id]-chunk.js',

		publicPath: '/',
	},

	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								outputStyle: 'expanded',
							},
							sourceMap: true,
						},
					},
				],
			},
		],
	},

	plugins: [
		new DefinePlugin({
			'process.env': JSON.stringify('development'),
		}),
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, '../static/index.html'),
			favicon: path.resolve(__dirname, '../static/favicon.ico'),
		}),
	],

	devServer: {
		host: env.devServer.host || 'localhost',
		port: env.devServer.port || 3000,
		static: {
			staticOptions: {
				contentBase: path.resolve(__dirname, '../static'),
				watchContentBase: true,
				watchOptions: {
					ignored: /node_modules/,
				},
			},
		},
		hot: true,
		client: {
			overlay: {
				warnings: true,
				errors: true,
			},
		},
		proxy: proxyRules,
	},
});
