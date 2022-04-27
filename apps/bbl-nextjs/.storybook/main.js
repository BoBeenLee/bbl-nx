module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
  ],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen',
  },
};
