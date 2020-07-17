const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   target: "node",
   entry: {
      "main-concepts/01-hello-world/app": "./src/main-concepts/01-hello-world",
      "main-concepts/02-introducing-jsx/app":
         "./src/main-concepts/02-introducing-jsx",
      "main-concepts/03-rendering-elements/app":
         "./src/main-concepts/03-rendering-elements"
   },
   output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "[name].js"
   },
   mode: "development",
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
         },
         {
            test: /\.(css|scss)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
         }
      ]
   },
   resolve: {
      extensions: ["*", ".js", ".jsx"]
   },
   devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      publicPath: "http://localhost:3000/dist/"
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: "[name].css",
         chunkFilename: "[id].css"
      })
   ]
};
