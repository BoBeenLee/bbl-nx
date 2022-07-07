export default function (plop) {
  const camelize = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '');
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const transformFileName = (str) => {
    return str.toLowerCase().replace(/ /g, '-');
  };

  const transformComponentName = (str) => {
    return capitalizeFirstLetter(camelize(str));
  };

  const transformFileTxtToTsx = (str) => {
    return str.toLowerCase().replace(/txt/g, 'tsx');
  };

  const transformComponentFileName = (componentFileName, componentName) => {
    return transformFileTxtToTsx(componentFileName).replace(
      `component`,
      componentName
    );
  };

  plop.setGenerator('post', {
    description: 'new post in repo',
    prompts: [
      {
        type: 'input',
        name: 'postName',
        message: 'Post Name: ',
      },
    ],
    actions: (data) => {
      const templateDir = 'tools/generators/plop-templates';
      const postFileName = transformFileName(data.postName);
      const postDir = `posts`;
      const actions = [];

      actions.push({
        type: 'add',
        path: `${postDir}/${transformFileName(postFileName)}.md`,
        templateFile: `${templateDir}/posts/article.md`,
      });

      actions.push({
        type: 'modify',
        path: `${postDir}/${transformFileName(postFileName)}.md`,
        pattern: /(-- PLOP TITLE PATH HERE --)/gi,
        template: `${postFileName}`,
      });

      actions.push({
        type: 'modify',
        path: `${postDir}/${transformFileName(postFileName)}.md`,
        pattern: /(-- PLOP TITLE NAME HERE --)/gi,
        template: `${data.postName}`,
      });

      return [...actions];
    },
  });

  plop.setGenerator('ui-components', {
    description: 'new ui component in repo',
    prompts: [
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
      const componentFileName = transformFileName(data.componentName);
      const componentName = transformComponentName(data.componentName);
      const componentFolder = data.componentFolder;
      const layerFolder = data.layerFolder;

      const componentDir = `libs/ui-components/src/lib/${layerFolder}/${componentFileName}`;
      const layerDir = `libs/ui-components/src/lib/${layerFolder}`;
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
          path: `${componentDir}/${transformComponentFileName(
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
          path: `${componentDir}/${transformComponentFileName(
            file,
            componentFileName
          )}`,
          pattern: /(-- PLOP COMPONENT NAME HERE --)/gi,
          template: `${componentName}`,
        });
        actions.push({
          type: 'modify',
          path: `${componentDir}/${transformComponentFileName(
            file,
            componentFileName
          )}`,
          pattern: /(-- PLOP COMPONENT FOLDER NAME HERE --)/gi,
          template: `${componentFileName}`,
        });
        actions.push({
          type: 'modify',
          path: `${componentDir}/${transformComponentFileName(
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
