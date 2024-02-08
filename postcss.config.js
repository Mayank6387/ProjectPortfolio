// postcss.config.js
module.exports = {
    plugins: [
      // Add your PostCSS plugins here
      require('autoprefixer'),
      require('postcss-flexbugs-fixes'), // Example: Autoprefixer for adding vendor prefixes
      // Add other plugins as needed
    ],
  };
  