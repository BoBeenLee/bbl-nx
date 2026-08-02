import { toKebabCase } from '../../utils/index.mjs';

const toISODate = (d) =>
  [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, '0'),
    String(d.getDate()).padStart(2, '0'),
  ].join('-');

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
      // 로더(apps/bbl-nextjs/src/libs/post.ts)가 읽는 디렉터리. 레포 루트의 posts/ 는 없다.
      const postDir = `apps/bbl-nextjs/posts`;
      const postFileName = toKebabCase(data.postName);
      const postPath = `${postDir}/${postFileName}.md`;

      return [
        {
          type: 'add',
          path: postPath,
          templateFile: `${templateDir}/posts/article.md`,
        },
        {
          type: 'modify',
          path: postPath,
          pattern: /(-- PLOP TITLE PATH HERE --)/gi,
          // 라우팅은 파일명 slug 만 쓴다. path 는 소비되지 않지만 기존 포스트와
          // 형태를 맞추기 위해 slug 와 같은 값으로 채운다.
          template: `${postFileName}`,
        },
        {
          type: 'modify',
          path: postPath,
          pattern: /(-- PLOP TITLE NAME HERE --)/gi,
          template: `${data.postName}`,
        },
        {
          type: 'modify',
          path: postPath,
          pattern: /(-- PLOP DATE HERE --)/gi,
          // 정렬이 문자열 비교이고 표시용 포맷터가 Invalid Date 에서 예외를 던지므로
          // 0을 채운 YYYY-MM-DD 외의 형태를 넣으면 안 된다.
          template: toISODate(new Date()),
        },
      ];
    },
  });
}
