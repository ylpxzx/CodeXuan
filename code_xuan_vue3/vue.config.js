const webpack = require("webpack");
// 配置路径别名
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // lintOnSave: false,
  publicPath: './',
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: true
    }
  },
  transpileDependencies: ["quasar"],
  // 配置路径别名
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }]),
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("assets", resolve("./src/assets"))
      .set("components", resolve("./src/components"))
      .set("views", resolve("./src/views"))
      .set("styles", resolve("./src/styles"))
  }
};
