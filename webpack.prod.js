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
      comments: false,
      compress: {
        warnings: false
      }
    })
  ],
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
