const path = require("path");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.js",

  mode: isProduction ? "production" : "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  // plugins: [new MiniCssExtractPlugin()],
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
  //     },
  //     {
  //       test: /\.(png|svg|jpg|gif)$/,
  //       use: ["file-loader"],
  //     },
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/,
  //       use: ["file-loader"],
  //     },
  //   ],
  // },
};
