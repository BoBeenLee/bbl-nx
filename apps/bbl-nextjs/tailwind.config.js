const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(
      __dirname,
      '{app,src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    join(__dirname, '../../libs/**/*!(*.stories|*.spec).{tsx,jsx,js,html}')
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
