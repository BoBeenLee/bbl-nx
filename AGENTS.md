# bbl — 에이전트 작업 기준

개인 블로그 + 홈페이지. Turborepo 모노레포에 Next.js 13 App Router 앱 1개(`apps/bbl-nextjs`)와
라이브러리 7개(`libs/*`)가 있다. 패키지 매니저는 pnpm, Node 버전은 `.nvmrc`가 단일 출처다.

이 문서는 **사실의 단일 출처**다. 경로·파일명·명령·스키마·설정 플래그·알려진 함정은 전부 여기에만
적는다. 절차와 판정 기준은 `.claude/skills/*/SKILL.md`가 소유한다. 같은 내용을 양쪽에 적지 않는다.

## 1. 작업 원칙

- **확인한 것과 추정한 것을 구분 표기한다.** `✅ 확인됨(무엇을 실행해서 무엇을 봤는지)` vs
  `⚠️ 미검증`. 절대 섞지 않는다. "에러가 안 났다"는 확인이 아니다.
- **수정 전에 파일을 읽는다.** export 시그니처를 바꾸기 전에 호출부를 전부 grep한다.
- **exit 0 을 통과 근거로 쓰지 않는다.** 이 레포에는 실패했는데 0으로 끝나는 경로가 실재한다(§10).
  명령마다 "무엇이 생겼는지"를 직접 확인한다.
- **레포 전체 grep 시 `.claude/worktrees/` 를 제외한다.** 워크트리 체크아웃이 레포 안에 있어
  모든 결과가 이중으로 잡힌다. `--exclude-dir=.claude`.

## 2. 패키지 지도

| 경로 | 패키지 | 역할 | 여기 속하지 않는 것 |
|---|---|---|---|
| `apps/bbl-nextjs` | `bbl-nextjs` | App Router 라우트, `'use client'` 경계, 앱 전용 libs(post 로더·gtag·firebase·env) | 재사용 컴포넌트 |
| `libs/features` | `@bbl-nx/features` | 기능 단위 수직 슬라이스(`about`/`blog`/`project`). 개인 데이터를 직접 임포트하는 컴포넌트 | props 만 받는 범용 컴포넌트 |
| `libs/ui-components` | `@bbl-nx/ui-components` | 프레젠테이셔널 컴포넌트(atoms/molecules/organisms/templates/helpers) | 개인 데이터 참조 |
| `libs/constants` | `@bbl-nx/constants` | 개인 데이터 전체 + SEO 메타 + 라우트 맵 (§7) | 로직 |
| `libs/images` | `@bbl-nx/images` | 이미지 경로 맵 + Storybook 정적 사본 (§7) | 컴포넌트 |
| `libs/utils` | `@bbl-nx/utils` | 순수 함수(array, datetime, string, router …) | React |
| `libs/hooks` | `@bbl-nx/hooks` | 공용 훅. 현재 `use-click-outside` 하나 | 컴포넌트 |
| `libs/libs` | `@bbl-nx/libs` | 서드파티 파사드. 현재 `firebase-analytics` 하나 | 직접 SDK 호출 |
| `tools/generators` | — | plop 템플릿 (§8 `POST-NEW`, `COMPONENT-NEW`) | |

모든 lib은 빌드 단계가 없다. `main`/`types`가 TS 소스를 직접 가리킨다.

## 3. 별칭과 임포트 규칙

두 종류가 섞여 있다.

- **배럴 별칭** (패키지 루트 하나를 가리킴): `@bbl-nx/constants`, `@bbl-nx/hooks`,
  `@bbl-nx/images`, `@bbl-nx/libs`, `@bbl-nx/utils`
- **와일드카드 별칭** (딥 경로): `@bbl-nx/features/*` → `libs/features/src/lib/*`,
  `@bbl-nx/ui-components/*` → `libs/ui-components/src/lib/*`, `@bbl-nextjs/*` → `apps/bbl-nextjs/src/*`

규칙: 패키지 경계를 넘으면 별칭, 같은 패키지 안에서는 상대 경로. 실제 코드는 와일드카드 쪽을
딥 경로로 임포트한다 — 예: `@bbl-nx/ui-components/atoms/alink/alink`.

**`@bbl-nx/ui-components`와 `@bbl-nx/features`는 bare 형태가 `paths`에 없다.** 와일드카드
(`/*`)만 등록돼 있어서 `import { X } from '@bbl-nx/ui-components'`는 TS가 해석하지 못한다.
두 패키지의 루트 배럴(`src/lib/index.ts`, `src/index.ts`)은 그래서 임포터가 0건이다.
딥 경로가 유일한 임포트 방법이다.

**별칭은 두 곳에 정의돼 있고 항상 같이 고쳐야 한다:**
`tsconfig.base.json`의 `paths`, `jest.preset.js`의 `moduleNameMapper`.
pnpm은 워크스페이스 패키지를 그것을 선언한 패키지에만 링크하므로 lib끼리는 node 해석으로 서로를
찾지 못한다. jest에서 별칭이 필요한 이유가 이것이다.
`apps/bbl-nextjs/next.config.js`의 `transpilePackages`에도 모든 워크스페이스 패키지가 들어가야 한다.

## 4. 컴포넌트 규약

디렉터리 하나 = 컴포넌트 하나. kebab-case 디렉터리 안에 같은 이름의 3파일:

```
<layer>/<kebab>/<kebab>.tsx
<layer>/<kebab>/<kebab>.spec.tsx
<layer>/<kebab>/<kebab>.stories.tsx
```

컴포넌트별 `index.ts`는 만들지 않는다. 레이어 배럴에 한 줄을 더한다:
`export * from './<kebab>/<kebab>';`

**레이어 배럴 확장자가 섞여 있다.** 없는 확장자에 export를 추가하면 같은 레이어에 배럴이 두 개
생기고 하나만 읽힌다 — 타입 에러 없이 컴포넌트가 화면에 안 나온다.

| 배럴 | 확장자 |
|---|---|
| `libs/ui-components/src/lib/{atoms,molecules,organisms,templates}/index` | `.ts` |
| `libs/ui-components/src/lib/helpers/index` | **`.tsx`** |
| `libs/ui-components/src/lib/index` (루트) | `.ts` |
| `libs/features/src/lib/{about,blog,project}/components/organisms/index` | `.ts` |
| `libs/features/src/lib/about/components/templates/index` | `.ts` |
| `libs/features/src/lib/{blog,project}/components/templates/index` | **`.tsx`** |
| `libs/features/src/lib/<feature>/{index,components/index}` | `.tsx` |

**루트 배럴은 통합 지점이 아니다.** `libs/ui-components/src/lib/index.ts`는 다섯 레이어를 모두
재export하지만 §3의 이유로 아무도 임포트하지 않는다. 등록해야 하는 것은 **레이어 배럴**이고,
레이어 배럴에 한 줄 추가하는 것으로도 끝이 아니다. 쓸 파일에서 딥 경로로 임포트해 화면에 붙는
것까지가 완료다.

`libs/features`는 레이어가 `components/` 아래에 있고 **organisms와 templates만 쓴다.**
atoms/molecules/helpers 배럴은 존재하지 않는다.

### in-file 계약

```tsx
export interface <Pascal>Props {
  className?: string;
}

export function <Pascal>(props: <Pascal>Props) {
  const { className } = props;   // 첫 줄에서 props 구조분해
  ...
}

export default <Pascal>;         // 네임드 + default 둘 다
```

`classnames`는 `cn`으로 임포트하고 `cn(className, '…')` 순서를 지킨다. Tailwind는 인라인이고
색상 클래스에는 `dark:` 짝을 붙인다. CSS 모듈은 전례가 둘뿐이다
(`molecules/menu-button`, `organisms/mobile-menus`) — 새로 만들기 전에 그 둘을 먼저 읽는다.
CSS 모듈 타입은 `libs/ui-components/src/css-modules.d.ts`가 선언한다.

### 스토리 / 스펙

CSF2, `Template.bind({})` 형태. `title`은 `'<소문자 레이어>/<Pascal>'`이고 중첩 자식은
`'<layer>/<Parent>/<Child>'`(예: `organisms/Blogs/BlogCard`).

**복사하지 말 것 (기존 3건의 일탈):** `Atoms/Avatar`, `Atoms/Seperator`(레이어가 대문자),
`libs/ui-components/src/lib/organisms/nav-footer/nav-footer.stories.tsx`의
`molecules/NavFooter`(organisms에 있는데 molecules로 표기).

스펙은 `render(<X />); expect(baseElement).toBeTruthy();` 형태. 스토리는 파일명 글롭으로만
등록되므로 배럴 수정이 필요 없다.

## 5. 클라이언트 / 서버 경계

`'use client'`는 레포 전체에 **4개뿐이고 전부 앱에 있다. `libs` 에는 0개다.**

| 파일 | 감싸는 대상 |
|---|---|
| `apps/bbl-nextjs/app/theme-provider.tsx` | `next-themes` |
| `apps/bbl-nextjs/src/components/ui/nav.tsx` | ui-components `Nav` (`usePathname()` 주입) |
| `apps/bbl-nextjs/src/components/ui/nav-footer.tsx` | ui-components `NavFooter` |
| `apps/bbl-nextjs/src/components/blog/blog-template.tsx` | features `BlogTemplate` |

`libs/features/.../blog-template.tsx`는 `useState`/`useCallback`/`useTransition`을 쓰면서도
지시어가 없다. 앱 쪽 얇은 래퍼가 경계를 소유하기 때문이다. libs에 훅을 쓰는 컴포넌트를 만들 때
할 일은 지시어를 붙이는 것이 아니라 이 래퍼 목록을 늘리는 것이다.

## 6. 블로그 데이터와 렌더 경로

포스트는 `apps/bbl-nextjs/posts/*.md`에 평평하게 있다. 로더는
`join(process.cwd(), 'posts')`로 해석하므로 `next dev`/`next build`의 cwd(앱 디렉터리)에 종속된다.

frontmatter (`gray-matter`, 타입은 `apps/bbl-nextjs/src/libs/post.ts`의 `PostItem`):

```yaml
---
path: '/blog/use-effect-event'   # 소비되지 않는다. 라우팅은 파일명 slug 만 쓴다
title: 'React useEffectEvent란 무엇인가?'
published: true
date: '2023-03-12'               # 0을 채운 YYYY-MM-DD 문자열
---
```

`frontmatter`는 `data as any`로 캐스팅되므로 초과 키가 조용히 통과한다.

**두 렌더 경로가 비대칭이다.**

| | 목록 `app/blog/page.tsx` | 상세 `app/blog/[id]/page.tsx` |
|---|---|---|
| 데이터 | XState 머신 부팅 → `waitFor(Done, 30s)` | `getPostById()` 직접 호출 |
| 필터 | `published === true` 만 | **필터 없음** |
| 정적 경로 | — | `generateStaticParams()`가 `getAllPosts()` 전체로 생성 |

따라서 `published: false`는 비공개가 아니라 **목록에서만 숨김**이다. URL을 아는 사람은 전문을 읽는다.

**실패가 예외로 드러나지 않는다.** `libs/features/src/lib/blog/machines/blog-machine.ts`에서
`onError`가 향하는 `Error`는 parallel 영역 안의 final state이고, 영역의 `onDone`이 `Done`을
가리킨다. 조회 실패도 `Done`에 도달하며 context는 `blogs: []`로 남는다. 화면에는
"No posts found."가 뜬다.

**로더는 디렉터리의 모든 항목을 포스트로 간주한다.** `fs.readdirSync` 결과를 그대로 매핑하고
`getPostBySlug`는 `.md`만 떼낸다. `.DS_Store` 하나, 하위 폴더 하나가 목록 전체를 빈 배열로 만든다.

**정렬은 문자열 비교다.** `libs/utils/src/lib/array/array.ts`의 `defaultDESC`가
`a[key] < b[key]`를 쓴다. `2026-8-2`처럼 0을 안 채운 날짜는 조용히 순서를 깨뜨린다.
그리고 `BlogCard`의 날짜 포맷터는 `new Date(str)` → `date-fns/format` 경로라 Invalid Date에서
`RangeError`를 던져 페이지를 죽인다.

## 7. 개인 데이터

전부 `libs/constants/src/lib/`의 평범한 TS 객체다. CMS 없음, 타입 검사도 테스트도 이 층의
내용을 잡아주지 않는다.

| 파일 | 내용 | 주의 |
|---|---|---|
| `home.ts` | 이름, 역할명, 소개문 | 소개문이 `metadata.ts`에도 따로 있다 |
| `experience.ts` | `{ title, titleUri, period, role }[]` | **자동 정렬 없음. 최신이 배열 맨 위** |
| `activity.ts` | `{ name, url, description }[]` | |
| `skill.ts` | `skills`, `categorySkills`, `categorySkillArray` | **서로 무관한 세 어휘** |
| `portfolio.ts` | `companyPortfolios`, `personalPortforlios`, `teamPortfolios` | 오타는 실제 export 이름이다 |
| `metadata.ts` | SEO/OG/Twitter 단일 출처 | `app/layout.tsx`의 `generateMetadata()`가 전부 여기서 만든다 |
| `nav.ts` | `NavRouter` 타입 라우트 맵 + `nav` 배열 | 라우트를 추가하면 여기에 등록 |

**경력 항목의 필드 이름과 화면 위치가 반대다.**
`libs/features/src/lib/about/components/organisms/experiences/experiences.tsx`가
`ExperienceCard`의 제목 줄에 `role`을, 캡션에 `${title} / ${period}`(회사명)을 넣는다.

**"스킬"이 가리키는 세 어휘:** `skills`는 `Record<string, { uri: string }>` URI 맵으로 어떤
컴포넌트도 렌더하지 않는다. `categorySkills`가 `/about`에 실제로 표시되는 유일한 것이다.
포트폴리오 항목의 `skills[]`는 자유 문자열이다.

**파생 타입이 personal을 제외한다.**
`PortfolioItem = Merge<MergeArrayType<typeof companyPortfolios>, MergeArrayType<typeof teamPortfolios>>`
— `personalPortforlios`만 고치면 타입 오류가 나지 않을 수 있다.

**이미지는 같은 84개 파일이 두 곳에 커밋돼 있다.** 심볼릭 링크가 아니다.

| 경로 | 용도 |
|---|---|
| `apps/bbl-nextjs/public/assets/**` | 사이트가 서빙 |
| `libs/images/src/lib/public/assets/**` | Storybook `staticDirs` |

경로 맵은 포트폴리오 그룹별로 `libs/images/src/lib/portfolio-*.ts`에 나뉘어 있고
`libs/images/src/index.ts`가 재export한다. 한 곳만 넣으면 한쪽에서만 보인다.

**constants 밖에 있는 예외 두 개:**
- 학력은 `libs/features/src/lib/about/components/templates/about-template/about-template.tsx`에
  문장으로 하드코딩돼 있다.
- 인물 소개문이 `home.description`과 `metadataItem.description` 두 곳에 서로 다른 문장으로 있다.

## 8. 명령어

스킬은 이 표의 **ID**로만 참조한다. 명령이 바뀌면 이 표 한 줄만 고친다.

| ID | 명령 | 커버하는 것 | 커버하지 않는 것 |
|---|---|---|---|
| `INSTALL` | `pnpm install` | 의존성 | — |
| `DEV` | `pnpm dev` | 앱 개발 서버 | Storybook |
| `BUILD` | `pnpm build` | `next build` (앱 타입체크 포함) | libs 타입체크, Storybook |
| `LINT` | `pnpm eslint` | 전 패키지 eslint | 타입 |
| `LINT-FIX` | `pnpm eslint:fix` | 위 + `--fix` | |
| `TEST` | `pnpm test` | 전 패키지 jest | 스펙이 임포트하지 않는 파일의 타입 |
| `TYPECHECK` | `pnpm typecheck` | `libs/*` 전부 `tsc --noEmit` | 앱 (앱은 `BUILD`가 본다) |
| `STORYBOOK` | `pnpm storybook` | ui-components + features 스토리, 포트 4400 | |
| `STORYBOOK-BUILD` | `pnpm build-storybook` | 정적 빌드 → `dist/storybook/{ui-components,features}` | **exit 0 이 산출물을 뜻하지 않음 (§10)** |
| `POST-NEW` | `pnpm post:new` | `apps/bbl-nextjs/posts/<slug>.md` 생성, 날짜 자동 | 본문 |
| `COMPONENT-NEW` | `pnpm components:new` | 3파일 + 레이어 배럴 등록 | 사용처 연결 |

- `pnpm install`은 **pnpm 7.33.7 이상**이어야 한다. `packageManager`에 박혀 있다.
  7.29.1은 Node 20+ 에서 `ERR_INVALID_THIS`로 설치 자체가 불가능하다(번들 node-fetch가
  글로벌 `Headers`와 충돌).
- turbo의 `lint`/`test`/`build`/`build-storybook`은 모두 `dependsOn: ["^build"]`다.
- 루트 eslint는 `ignorePatterns: ["**/*"]`이므로 패키지 스코프로만 동작한다.
  단일 패키지: `turbo run lint --filter=@bbl-nx/ui-components`.
- `pnpm test-storybook`은 4400에 dev 서버가 떠 있어야 한다.

## 9. 타입 · 린트 설정

- `strict`는 패키지별 `tsconfig.json`에 있다. `tsconfig.base.json`에는 없다.
- base가 켜놓은 것: `noUnusedLocals`, `noUnusedParameters`, `noUncheckedIndexedAccess`.
  인터페이스에서 필드를 지우면서 구조분해를 남겨두면 컴파일 에러다 — 관련 파일을 한 번에 고친다.
- eslint: `unused-imports/no-unused-imports`는 **error**, `unused-imports/no-unused-vars`는 warn.
  `*.ts,*.tsx`는 `@typescript-eslint/{ban-types,no-empty-function,no-explicit-any,no-non-null-assertion}`를 껐다.
- prettier는 `{ "singleQuote": true }` 하나뿐이다.
- 전역 앰비언트 타입은 `types/global.d.ts`: `MergeArrayType`, `Merge`, `OptionalProps`,
  `ExtractArray`, `IndexOf`, `AnyFunction`, `AsyncFunction`. 이 파일은 `export {}` 때문에
  모듈이므로 여기에 앰비언트 **모듈** 선언(`declare module '*.x'`)을 넣어도 적용되지 않는다.
- 앱은 `experimental: { appDir, typedRoutes }`를 쓴다. 라우트 문자열이 타입 체크된다.

## 10. 지금 깨져 있는 것 / 근거로 쓰지 말 것

각 항목에 고치는 방법을 달아 둔다. 고쳐지면 그 줄을 지운다.

| 항목 | 증상 | 고치는 방법 |
|---|---|---|
| **Storybook 빌드가 실패해도 exit 0** | 프리뷰 컴파일이 죽으면 매니저만 만들어진 채 성공으로 끝난다. `iframe.html`이 없다 | 항상 `dist/storybook/<pkg>/iframe.html` 존재를 확인한다. CI에는 검증 스텝이 들어가 있다 |
| **워크트리의 turbo 캐시가 메인 레포와 공유된다** | `.claude/worktrees/*`에서 돌리면 캐시가 `<메인레포>/.turbo`다. 예전 실패 산출물이 복원되면서 "2 cached, 성공"으로 보인다 | 의심되면 `rm -rf <메인레포>/.turbo` 후 재실행. `Cached: N cached` 줄을 읽는다 |
| Storybook babel preset | SB7의 babel-loader는 `preset-react`만 넣는다. `.storybook/main.js`의 `babel` 훅이 `preset-typescript`를 더한다. **여기에 `preset-react`를 또 넣으면** `Duplicate plugin/preset` 에러가 전체 빌드에서 삼켜져 위 증상이 된다 | 건드리지 않는다 |
| `storybook-addon-tailwindcss-dark-mode@0.0.9` | SB6 시대 애드온. deprecated 된 `@storybook/addons` 심으로 로드된다. SB7 비호환 목록에는 없고 현재 동작한다 | Storybook 8로 올릴 때 함께 정리. 대체품이 없어 빼면 다크모드 토글이 사라진다 |
| `@xstate/cli` 미설치 | `blog-machine.typegen.ts`를 재생성할 수 없다 | 머신을 고치면 typegen 파일을 손으로 맞추거나 `@xstate/cli`를 추가 |
| `libs/features/src/lib/logging` | `components/index.ts`가 0바이트. 루트 배럴에서도 빠져 있다 | 쓸 게 없으면 삭제 |
| `app/performance/handling-script/*` | `page.tsx`가 없어 라우트로 도달 불가. `next/script` 전략 실험 흔적 | 보관하거나 삭제 |
| Firebase 설정 하드코딩 | `apps/bbl-nextjs/src/libs/env.ts`에 apiKey/projectId/measurementId가 소스에 있다. 공개 레포다 | 웹 apiKey는 도메인 제한으로 보호되는 값이지만 환경변수로 옮기는 편이 낫다 |
| commitlint / husky | 둘 다 devDep에 있으나 설정 파일이 없어 아무것도 강제되지 않는다 | 규약은 §12, 강제는 없음 |
| `@bbl-nx/*` 패키지 스코프 | 레포 이름은 `bbl`이지만 스코프와 Vercel 도메인(`bbl-nx.vercel.app`)은 `bbl-nx`다 | 스코프 변경은 전 파일 임포트 교체라 별건. 도메인은 Vercel 프로젝트 설정 |

## 11. 배포

- **사이트**: Vercel. `master` 푸시 시 CI의 `npx vercel` 스텝. `vercel.json`이 GitHub 연동을 껐다.
- **Storybook**: `develop` 푸시 시 `dist/storybook/` 전체를 gh-pages로 발행 →
  `/ui-components/`, `/features/`. Chromatic은 `ui-components` 빌드만 올린다.
- 워크플로: `.github/workflows/ci-cd.yml`. Node/pnpm 버전을 워크플로에 다시 적지 않는다
  (`node-version-file: .nvmrc`, `pnpm/action-setup`이 `packageManager`를 읽음).

## 12. 커밋

Conventional Commits를 따른다(`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`).
강제 장치는 없다(§10). 기존 히스토리에는 `Refactor:` 같은 형태가 섞여 있다.
