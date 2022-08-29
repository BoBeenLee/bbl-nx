const rootMain = require('../../../.storybook/main');

// const path = require('path');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    ...rootMain.addons,
    '@nrwl/react/plugins/storybook',
    'storybook-addon-swc',
    'storybook-addon-next-router',
    // {
    //   name: 'storybook-addon-next',
    //   options: {
    //     nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    //   },
    // },
  ],
  staticDirs: ['../../../libs/images/src/lib/public', '../public'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    config.resolve.alias[`next/image`] = require.resolve(
      `../../../.storybook/__mocks__/next/image.js`
    );

    // add your own webpack tweaks if needed
    config.resolve.fallback = {
      fs: false,
      assert: false,
      buffer: false,
      console: false,
      constants: false,
      crypto: false,
      domain: false,
      events: false,
      http: false,
      https: false,
      os: false,
      path: false,
      punycode: false,
      process: false,
      querystring: false,
      stream: false,
      string_decoder: false,
      sys: false,
      timers: false,
      tty: false,
      url: false,
      util: false,
      vm: false,
      zlib: false,
    };
    return config;
  },
};
