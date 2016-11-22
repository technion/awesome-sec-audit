const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./assets/awesome-sec-audit.tsx",

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
