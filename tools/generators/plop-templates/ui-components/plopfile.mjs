import {
  toKebabCase,
  toCamelizeWIthUppercaseFirstLetter,
  toFileNameWithExtensionTsx,
} from '../../utils/index.mjs';

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
        choices: [
          { name: 'atoms', value: 'atoms' },
          { name: 'molecules', value: 'molecules' },
          { name: 'organisms', value: 'organisms' },
          { name: 'templates', value: 'templates' },
          { name: 'helpers', value: 'helpers' },
        ],
      },
    ],
    actions: (data) => {
      const templateDir = 'tools/generators/plop-templates';
      const location = data.location;
      const featuresFolder = data.featuresFolder;
      const layerFolder = data.layerFolder;
      const componentDir = `libs/${location}/src/lib${
        featuresFolder ? `/${featuresFolder}/components` : ``
      }/${layerFolder}/${componentFileName}`;
      const layerDir = `libs/${location}/src/lib${
        featuresFolder ? `/${featuresFolder}` : ``
      }/${layerFolder}`;
      const filesToAlwaysCopyOver = [
        'component.spec.txt',
        'component.stories.txt',
        'component.txt',
      ];
      const componentFileName = toKebabCase(data.componentName);
      const componentName = toCamelizeWIthUppercaseFirstLetter(
        data.componentName
      );

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

      // Modify component*.tsx
      filesToAlwaysCopyOver.forEach((file) => {
        actions.push({
          type: 'modify',
          path: `${componentDir}/${toFileNameWithExtensionTsx(
            file,
            componentFileName
          )}`,
          pattern: /(-- PLOP COMPONENT NAME HERE --)/gi,
          template: `${componentName}`,
        });
        actions.push({
          type: 'modify',
          path: `${componentDir}/${toFileNameWithExtensionTsx(
            file,
            componentFileName
          )}`,
          pattern: /(-- PLOP COMPONENT FOLDER NAME HERE --)/gi,
          template: `${componentFileName}`,
        });
        actions.push({
          type: 'modify',
          path: `${componentDir}/${toFileNameWithExtensionTsx(
            file,
            componentFileName
          )}`,
          pattern: /(-- PLOP LAYER FOLDER HERE --)/gi,
          template: `${layerFolder}`,
        });
      });

      return [
        ...actions,
        {
          type: 'append',
          path: `${layerDir}/index.ts`,
          template: `export * from './${componentFileName}/${componentFileName}';`,
        },
      ];
    },
  });
}
