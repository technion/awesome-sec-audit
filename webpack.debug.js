const webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: "eval-source-map",
  entry: "./assets/awesome-sec-audit-run.tsx",

  output: {
    filename: "awesome-sec-audit.js",
    path: __dirname + "/build",
  },
  module: {
    loaders: [
	  {
	    test: /\.tsx$/,
        exclude: /node_modules/,
        loaders: ["ts-loader"],
      }
	],
  },
}
console.log("webpack running:");
