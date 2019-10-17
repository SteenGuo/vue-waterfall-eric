const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin"); // 引入 vue-loader 文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "vue-waterfall-eric.min.js",
    library: 'waterfall',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: [".js", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        loader: "css-loader"
      },
      {
        test: /\.scss$/,
        use: [
          // 将 JS 字符串生成为 style 节点
          { loader: "style-loader" },
          // 将 CSS 转化成 CommonJS 模块
          { loader: "css-loader" },
          // 将 Sass 编译成 CSS
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(), // 这里 vue 需要额外添加一个插件，将定义的 .js 、 .css 规则应用到 .vue 文件中
    new CleanWebpackPlugin()
  ]
};
