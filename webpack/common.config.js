// webpack plugins
const { ProvidePlugin, DefinePlugin } = require('webpack');
const SplitChunksPlugin = require('webpack/lib/optimize/SplitChunksPlugin');

module.exports = {
	target: "node",
	entry: {
		app: ["./src/bootstrap.js"],
		vendor: "./src/vendor.js",
	},

	resolve: {
		extensions: [".js", ".scss"],

		modules: ["node_modules"],

		fallback: {
			http: require.resolve("stream-http"),
			https: require.resolve("https-browserify"),
			url: require.resolve("url"),
			process: require.resolve('process/browser')
		},
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},

			{
				type: "asset/resource",
				test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
				generator: {
					filename: `[path][name][ext]`,
					publicPath: "/",
				},
			},

			{
				test: /\.(mp4|webm)$/,
				loader: "url",
				options: {
					limit: 10000,
				},
			},
		],
	},

	plugins: [
		new SplitChunksPlugin({
			name: ["app", "vendor"],
			minChunks: Infinity,
		}),
		new ProvidePlugin({
			process: 'process/browser'
		}),
		new DefinePlugin({
			'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL)
		})
	],
};
