// config-overrides.js
const { override, addPostcssPlugins } = require('customize-cra');

module.exports = override(
  // Add or modify webpack configuration here
  addPostcssPlugins([
    // Add your PostCSS plugins here
    require('autoprefixer'),
    // Add other plugins as needed
  ])
);
// webpack.config.js or webpack.config.dev.js
module.exports = {
    // ... other configuration
  
    module: {
      rules: [
        // ... other rules
  
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
  };
  