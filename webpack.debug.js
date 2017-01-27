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
    rules: [
      {
	    test: /\.tsx$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      }
    ],
  },
}
console.log("webpack running:");
