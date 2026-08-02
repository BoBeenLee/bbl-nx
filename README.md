# bbl

![build](https://github.com/BoBeenLee/bbl/actions/workflows/ci-cd.yml/badge.svg)
![GitHub deployments](https://img.shields.io/github/deployments/BoBeenLee/bbl/production?label=vercel&logo=vercel&logoColor=white)
[![CodeFactor](https://www.codefactor.io/repository/github/bobeenlee/bbl/badge)](https://www.codefactor.io/repository/github/bobeenlee/bbl)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
![lastUpdated](https://img.shields.io/github/last-commit/BoBeenLee/bbl/master)

blog & homepage project based on monorepo(Turborepo)

- bbl-nextjs

## Links

- Homepage
  - https://bbl-nx.vercel.app/
- Storybook
  - Component, Features: https://bobeenlee.github.io/bbl/ui-components/
  - Features only: https://bobeenlee.github.io/bbl/features/

## Feature

- **Framework**: Next.js (App Router)
- **Deployment**: Vercel
- **Styling**: Tailwind CSS
- **Tooling**: [Storybook](https://github.com/storybooks/storybook)
- **Build System**: [Turborepo](https://turbo.build/repo)

## 📂 Directory Structure

    root
    ├── apps
    ├──── bbl-nextjs
    ├────── app            # App Router routes
    ├────── posts          # MD posts directory
    ├────── src
    ├──────── apis
    ├──────── components   # components with next ('use client' 경계)
    ├──────── libs
    ├──────── machines     # integrating machines with an api
    ├── libs
    ├──── features         # all of the code for a feature and putting it in one single place (ex) authentication - login, signup, user data...)
    ├──── constants        # 개인 데이터(경력·활동·스킬·포트폴리오·SEO 메타)
    ├──── hooks            # shared hooks
    ├──── images           # image assets
    ├──── libs             # third-party libraries (ex) fetch, sentry...) - facade pattern을 통한 구현
    ├──── ui-components    # general small components, presentational components (atoms, molecules, organisms, templates)
    ├──── utils            # very small and simple functions, generally pure function (ex) uri, browser)
    ├── tools
    ├──── generators       # plop-tempates 저장소
    ├── AGENTS.md          # 에이전트/기여자 작업 기준 (사실의 단일 출처)
    └── README.md

## Prerequisites

- node version 22.12.0

## Installing / Getting started

```shell
pnpm install
pnpm install --registry=https://registry.npmjs.org/
```

### Setting up Dev

```shell
pnpm dev
```

## Tests

### Running unit tests

```shell
pnpm test
```

## Deployment

- Deploy to Storybook
  - github action develop 브랜치 기준 github pages로 배포 진행합니다.
  - ui-components: https://bobeenlee.github.io/bbl/ui-components/
  - features: https://bobeenlee.github.io/bbl/features/
- Deploy to Vercel
  - master 브랜치 기준 배포합니다.
  - https://bbl-nx.vercel.app/

### Generate

```shell
pnpm components:new   # 컴포넌트 3파일 + 레이어 배럴 등록
pnpm post:new         # apps/bbl-nextjs/posts/<slug>.md
```

## Supported browsers

- [defaults](https://github.com/browserslist/browserslist#full-list): Browserslist’s default browsers (> 0.5%, last 2 versions, Firefox ESR, not dead).

## Document

- [Agent / Contributor Guide](./AGENTS.md) — 패키지 지도, 규약, 명령, 함정
- [XState Machines](./MACHINES.md)
- [Analytics Report](./ANALYTICS.md)

## Gitflow

- git flow release start, finish 2.0.16
- git flow hotfix start, finish 2.0.16-hotfix.0

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/1489321?v=4" width="100px;"/><br /><sub><b>BoBeenLee</b></sub>](https://bbl.netlify.com/)<br />[💬](#question-BoBinLee "Answering Questions") [📝](#blog-BoBinLee "Blogposts") [🐛](https://github.com/BoBinLee/asking-price/issues?q=author%3ABoBinLee "Bug reports") [💻](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Code") [🎨](#design-BoBinLee "Design") [📖](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Documentation") [📋](#eventOrganizing-BoBinLee "Event Organizing") [💡](#example-BoBinLee "Examples") [💵](#financial-BoBinLee "Financial") [🔍](#fundingFinding-BoBinLee "Funding Finding") [🤔](#ideas-BoBinLee "Ideas, Planning, & Feedback") [🚇](#infra-BoBinLee "Infrastructure (Hosting, Build-Tools, etc)") [📦](#platform-BoBinLee "Packaging/porting to new platform") [🔌](#plugin-BoBinLee "Plugin/utility libraries") [👀](#review-BoBinLee "Reviewed Pull Requests") [📢](#talk-BoBinLee "Talks") [⚠️](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Tests") [🔧](#tool-BoBinLee "Tools") [🌍](#translation-BoBinLee "Translation") [✅](#tutorial-BoBinLee "Tutorials") [📹](#video-BoBinLee "Videos") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->
