const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
});

module.exports = {
  devServer: {
    port: 80,
    disableHostCheck: true
  }
};