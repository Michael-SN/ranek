const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/color.scss";
          @import "@/scss/rem.scss";
        `,
      },
    },
  },
});
