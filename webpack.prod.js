const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./assets/awesome-sec-audit-run.tsx",

  output: {
    filename: "awesome-sec-audit.js",
    path: __dirname + "/build",
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
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
