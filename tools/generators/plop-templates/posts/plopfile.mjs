import { transformFileName } from '../../utils/index.mjs';

export function postsPlop(plop) {
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
}
