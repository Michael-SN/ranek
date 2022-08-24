const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/globals.scss";
          @import "@/scss/breakpoints.scss";
          @import "@/scss/rem.scss";
          @import "@/scss/color.scss";
        `,
      },
    },
  },
});
