const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [],
  // @storybook/addon-postcss 는 SB6 시대 애드온이고 SB7 이 비호환 경고를 냈다.
  // SB7 의 webpack5 빌더가 postcss 를 기본 처리하고, tailwind-imports.css 는
  // preview.js 에서 인라인 로더 체인(!style-loader!css-loader!postcss-loader!)으로
  // 직접 주입하므로 애드온이 필요 없다.
  addons: ['storybook-addon-tailwindcss-dark-mode', '@storybook/addon-interactions'],
  typescript: {
    reactDocgen: false
  },
  // SB7 의 babel-loader 는 preset-react 는 넣어주지만 preset-typescript 는 넣지 않는다.
  // 예전에는 패키지마다 있던 .babelrc(@nx/*/babel)가 그 역할을 했고, 그걸 제거하면서
  // libs 의 .ts 파일이 "Unexpected token" 으로 죽었다.
  // preset-react 를 여기서 또 넣으면 "Duplicate plugin/preset detected" 가 되는데,
  // 이 에러는 전체 빌드에서 삼켜져 exit 0 + iframe.html 없음으로 나타난다. 넣지 말 것.
  // jest 에 영향이 가지 않도록 storybook 설정 안에서만 지정한다.
  babel: async (options) => ({
    ...options,
    presets: [...(options.presets || []), '@babel/preset-typescript'],
  }),
  webpackFinal: async (config) => {
    // @bbl-nx/* 별칭 해석. 예전에는 '@nx/react/plugins/storybook' 애드온이 이걸 넣어줬고,
    // 그 애드온을 제거하면서 별칭이 전부 Module not found 로 죽었다.
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, '../tsconfig.base.json'),
        extensions: config.resolve.extensions,
      }),
    ];

    // rule.test 는 undefined 일 수 있다(SB7 기본 룰셋에 test 없는 항목이 섞여 있다).
    // 가드 없이 rule.test.test(...) 를 호출하면 webpackFinal 이 throw 하고,
    // 그러면 매니저만 빌드된 채 exit 0 으로 끝나 iframe.html 이 없는 스토리북이 나온다.
    const rules = config.module.rules;

    // SVG 는 파일 로더 대신 @svgr/webpack 으로 컴포넌트화한다.
    const fileLoaderRule = rules.find(
      (rule) =>
        rule &&
        rule.test &&
        !Array.isArray(rule.test) &&
        rule.test.test &&
        rule.test.test('.svg')
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }
    rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    // 일반 CSS 규칙이 *.module.css 를 삼키지 않게 하고, CSS Modules 는 별도 규칙으로 처리한다.
    const cssRule = rules.find(
      (rule) =>
        rule && rule.test && String(rule.test) === String(/\.css$/)
    );
    if (cssRule) {
      cssRule.exclude = /\.module\.css$/;
    }
    rules.push({
      test: /\.module\.css$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { modules: true } },
      ],
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