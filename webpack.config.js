var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    	title: 'My app',
    	template: __dirname + '/src/index.html'
    })
  ],
  module: {
  	rules: [
  		{
  			test: /\.css$/,
  			use: ['style-loader', 'css-loader']
  		}
  	]
  }
};