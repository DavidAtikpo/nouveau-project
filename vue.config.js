const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true, // Enable transpilation for dependencies

  // Custom Vue CLI plugin options
  pluginOptions: {
    vite: {
      vue: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('app-'), // Treat tags starting with 'app-' as custom elements
          delimiters: ['{{', '}}'], // Custom delimiters for Vue templates
        },
      },
    },
  },

  // Additional options for production
  configureWebpack: {
    // Define any additional webpack configurations here
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map', // Disable source maps in production
  },
});
