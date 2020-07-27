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
         "./src/main-concepts/03-rendering-elements",
      "main-concepts/04-comps-and-props/app":
         "./src/main-concepts/04-comps-and-props",
      "main-concepts/05-state-and-lifecycle/app":
         "./src/main-concepts/05-state-and-lifecycle",
      "main-concepts/06-handling-events/app":
         "./src/main-concepts/06-handling-events",
      "main-concepts/07-conditional-rendering/app":
         "./src/main-concepts/07-conditional-rendering",
      "main-concepts/08-lists-and-keys/app":
         "./src/main-concepts/08-lists-and-keys",
      "main-concepts/09-forms/app": "./src/main-concepts/09-forms",
      "main-concepts/10-lifting-state-up/app":
         "./src/main-concepts/10-lifting-state-up",
      "main-concepts/11-comp-vs-inheritance/app":
         "./src/main-concepts/11-comp-vs-inheritance",
      "main-concepts/12-thinking-in-react/app":
         "./src/main-concepts/12-thinking-in-react",
      "advanced-guides/accessibility/app": "./src/advanced-guides/accessibility"
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
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            sideEffects: true
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
