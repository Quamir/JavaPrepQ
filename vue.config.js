const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? 'https://quamir.github.io/JavaPrepQ' : '/',

  css: {
   loaderOptions: {
    scss: {
      additionalData: `
        @import "@/assets/_functions.scss";
        @import "@/assets/_variables.scss";
      `
    }
   }
  }

},);
