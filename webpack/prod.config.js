const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const webpackCommon = require('./common.config');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = merge(webpackCommon, {
	bail: true,

	mode: 'production',

	performance: {
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},

	output: {
		path: path.resolve(__dirname, '../dist/'),

		filename: '[name]-[contenthash].min.js',

		sourceMapFilename: '[name]-[contenthash].map',

		chunkFilename: '[id]-[chunkhash].js',

		publicPath: '/',

		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
						},
					},
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								outputStyle: 'expanded',
							},
						},
					},
				],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, '../static/index.html'),
			favicon: path.resolve(__dirname, '../static/favicon.ico'),
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
		}),
		new CleanWebpackPlugin({
			verbose: true,
			cleanOnceBeforeBuildPatterns: ['!.gitignore'],
		}),
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
		new MiniCssExtractPlugin({ filename: '[name]-[chunkhash].min.css' }),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, '../static'),
					globOptions: { ignore: ['**/index.html', 'favicon.ico'] },
				},
			],
		}),
		new DefinePlugin({
			'process.env': JSON.stringify('production'),
		}),
		new TerserPlugin({
			terserOptions: {
				output: {
					comments: false,
				},
				ie8: true,
			},
		}),
		new LoaderOptionsPlugin({
			options: {
				context: '/',
				sassLoader: {
					includePaths: [path.resolve(__dirname, '/src')],
				},
			},
		}),
	],
});
