var path = require("path");

module.exports = {
	entry: path.join(__dirname, "src/scripts/", "App.js"),
	output: {
		path: path.join(__dirname, "public/"),
		filename: "scripts/bundle.js"
	},
	module: {
  		loaders: [
    		{ test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot-loader", "babel-loader"] }
  		]
	}
};