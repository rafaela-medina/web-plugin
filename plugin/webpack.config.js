const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "plugin.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist/",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        type: "asset/resource",
      },
    ],
  },
  mode: "production",
};
