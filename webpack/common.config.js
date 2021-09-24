// webpack plugins
const SplitChunksPlugin = require('webpack/lib/optimize/SplitChunksPlugin');

module.exports = {
	entry: {
		app: ['./src/bootstrap.js'],
		vendor: './src/vendor.js',
	},

	resolve: {
		extensions: ['.js', '.scss'],

		modules: ['node_modules'],

		fallback: {
			http: require.resolve('stream-http'),
			https: require.resolve('https-browserify'),
		},
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},

			{
				type: 'asset/resource',
				test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
				generator: {
					filename: '[path][name].[ext]',
					publicPath: '/',
				},
			},

			{
				test: /\.(mp4|webm)$/,
				loader: 'url',
				options: {
					limit: 10000,
				},
			},
		],
	},

	plugins: [
		new SplitChunksPlugin({
			name: ['app', 'vendor'],
			minChunks: Infinity,
		}),
	],
};
