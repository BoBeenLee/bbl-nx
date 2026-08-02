import fs from 'fs';
import {
  toKebabCase,
  toPascalCase,
  toFileNameWithExtensionTsx,
} from '../../utils/index.mjs';

// 레이어 배럴은 패키지·레이어에 따라 index.ts 와 index.tsx 가 섞여 있다.
// 존재하지 않는 확장자에 append 하면 같은 레이어에 배럴이 두 개 생기고 하나만 읽힌다
// (타입 에러 없이 컴포넌트가 화면에 안 나온다). 실제로 있는 파일을 찾아서 쓴다.
const resolveBarrel = (layerDir) => {
  const found = ['index.ts', 'index.tsx'].find((f) =>
    fs.existsSync(`${layerDir}/${f}`)
  );
  return `${layerDir}/${found ?? 'index.ts'}`;
};

export function uiComponentsPlop(plop) {
  plop.setGenerator('ui-components', {
    description: 'new ui component in repo',
    prompts: [
      {
        type: 'list',
        name: 'location',
        message: 'Location Folder: ',
        choices: [
          { name: 'features', value: 'features' },
          { name: 'ui-components', value: 'ui-components' },
        ],
      },
      {
        type: 'list',
        name: 'featuresFolder',
        message: 'Features Folder: ',
        choices: [
          { name: 'about', value: 'about' },
          { name: 'project', value: 'project' },
          { name: 'blog', value: 'blog' },
        ],
        when(answers) {
          return answers.location === 'features';
        },
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Component Name: ',
      },
      {
        type: 'list',
        name: 'layerFolder',
        message: 'Layer Folder: ',
        // features 는 organisms/templates 만 쓴다. 나머지 레이어에는 배럴이 아예 없다.
        choices(answers) {
          const layers =
            answers.location === 'features'
              ? ['organisms', 'templates']
              : ['atoms', 'molecules', 'organisms', 'templates', 'helpers'];
          return layers.map((layer) => ({ name: layer, value: layer }));
        },
      },
    ],
    actions: (data) => {
      const templateDir = 'tools/generators/plop-templates';
      const location = data.location;
      const featuresFolder = data.featuresFolder;
      const layerFolder = data.layerFolder;

      const componentFileName = toKebabCase(data.componentName);
      const componentName = toPascalCase(data.componentName);

      // features 는 레이어가 components/ 아래에 있다. 컴포넌트 경로와 배럴 경로가
      // 같은 규칙을 쓰지 않으면 append 가 존재하지 않는 경로를 가리키고,
      // plop 이 마지막 액션에서 throw 하면서 컴포넌트가 반쯤 생성된 채 남는다.
      const layerDir = `libs/${location}/src/lib${
        featuresFolder ? `/${featuresFolder}/components` : ``
      }/${layerFolder}`;
      const componentDir = `${layerDir}/${componentFileName}`;

      const filesToAlwaysCopyOver = [
        'component.spec.txt',
        'component.stories.txt',
        'component.txt',
      ];

      const actions = [];

      // Copy over basic files
      filesToAlwaysCopyOver.forEach((file) => {
        actions.push({
          type: 'add',
          path: `${componentDir}/${toFileNameWithExtensionTsx(
            file,
            componentFileName
          )}`,
          templateFile: `${templateDir}/ui-components/${file}`,
        });
      });

      // Fill in the placeholders
      filesToAlwaysCopyOver.forEach((file) => {
        const path = `${componentDir}/${toFileNameWithExtensionTsx(
          file,
          componentFileName
        )}`;
        actions.push({
          type: 'modify',
          path,
          pattern: /(-- PLOP COMPONENT NAME HERE --)/gi,
          template: `${componentName}`,
        });
        actions.push({
          type: 'modify',
          path,
          pattern: /(-- PLOP COMPONENT FOLDER NAME HERE --)/gi,
          template: `${componentFileName}`,
        });
        actions.push({
          type: 'modify',
          path,
          pattern: /(-- PLOP LAYER FOLDER HERE --)/gi,
          template: `${layerFolder}`,
        });
      });

      return [
        ...actions,
        {
          type: 'append',
          path: resolveBarrel(layerDir),
          template: `export * from './${componentFileName}/${componentFileName}';`,
        },
      ];
    },
  });
}
