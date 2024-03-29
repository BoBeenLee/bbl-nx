const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../../features/src/lib/**/*.stories.mdx',
    '../../features/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    ...rootMain.addons,
    '@nx/react/plugins/storybook',
  ],
  staticDirs: ['../../images/src/lib/public'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed
    // config.resolve.alias[`next/router`] = require.resolve(
    //   `../../../.storybook/__mocks__/next/router.js`
    // );
    // config.resolve.alias[`next/link`] = require.resolve(
    //   `../../../.storybook/__mocks__/next/link.js`
    // );
    // config.resolve.alias[`next/image`] = require.resolve(
    //   `../../../.storybook/__mocks__/next/image.js`
    // );

    return config;
  },
};
