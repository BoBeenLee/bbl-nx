const path = require('path');
module.exports = {
  features: {
    interactionsDebugger: true
  },
  stories: [],
  addons: ['storybook-addon-tailwindcss-dark-mode', '@storybook/addon-interactions', {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss')
      }
    }
  }],
  typescript: {
    reactDocgen: false
  },
  // uncomment the property below if you want to apply some webpack config globally
  webpackFinal: async (config, {
    configType
  }) => {
    // Make whatever fine-grained changes you need that should apply to all storybook configs
    const fileLoaderRule = config.module.rules.find(rule => !Array.isArray(rule.test) && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    });

    // First we prevent webpack from using Storybook CSS rules to process CSS modules
    const findCSS = config.module.rules.find(rule => rule.test.toString() === '/\\.css$/');
    if (findCSS) {
      findCSS.exclude = /\.module\.css$/;
    }
    config.module.rules.push({
      test: /\.module\.css$/,
      exclude: /\.module\.css$/,
      use: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, './')
    });
    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true
  }
};