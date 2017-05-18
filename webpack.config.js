const path = require( 'path' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve( __dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [
			//run all JS files through babel-loader
			{ test: /\.(js)$/, use: 'babel-loader'},
			//run all CSS files through style-loader and css-loader
			//This line makes the 'require' statement for ./index.css in the main index.js line valid
			{ test: /\.(css)$/, use: [ 'style-loader', 'css-loader' ] }
		]
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [ new HTMLWebpackPlugin({
		template: 'app/index.html'
	})]
}