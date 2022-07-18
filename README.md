# bbl-nx

![build](https://github.com/BoBeenLee/bbl-nx/actions/workflows/ci-cd.yml/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9df06975-e9cf-4761-bf57-48f6f970c96b/deploy-status)](https://app.netlify.com/sites/bbl/deploys)
![GitHub deployments](https://img.shields.io/github/deployments/BoBeenLee/bbl-nx/production?label=vercel&logo=vercel&logoColor=white)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

blog & homepage project based on monorepo(nx)

- bbl-nextjs
- bbl-remix

## Feature

- **Framework**: Next.js, Remix
- **Deployment**: Vercel
- **Styling**: Tailwind CSS
- **Tooling**: [Storybook](https://github.com/storybooks/storybook)
- **Build System**: [Nx.dev](https://nx.dev/)

## 📂 Directory Structure

    root
    ├── apps
    ├──── bbl-nextjs
    ├────── src
    ├──────── apis
    ├──────── components   # components with next
    ├──────── libs
    ├──────── machines     # integrating machines with an api
    ├──────── pages        # Pages
    ├──── bbl-remix
    ├────── app
    ├──────── apis
    ├──────── components   # components with remix
    ├──────── libs
    ├──────── machines     # integrating machines with an api
    ├──────── routes       # Routes = Pages
    ├──────── styles
    ├── libs
    ├──── features         # all of the code for a feature and putting it in one single place (ex) authentication - login, signup, user data...)
    ├──── apis             #
    ├──── constants        #
    ├──── hooks            # shared hooks
    ├──── images           # image assets
    ├──── libs             # third-party libraries (ex) fetch, axios, sentry...) - facade pattern을 통한 구현
    ├──── ui-components    # general small components, presentational components (atoms, molecules, organisms, templates)
    ├──── utils            # very small and simple functions, generally pure function (ex) uri, browser)
    ├── posts              # MD posts directory
    ├── tools
    ├──── generators       # plop-tempates 저장소
    └── README.md

## Prerequisites

node version 16.13.2

## Installing / Getting started

```shell
npm i --legacy-peer-deps
```

### Setting up Dev

```shell
npm start
```

## Tests

### Running unit tests

```shell
npm run test:affected
```

## Deployment

- Deploy to Storybook
  - github action master 브랜치 기준 github pages로 배포 진행합니다.
  - ui-components: https://bobeenlee.github.io/bbl-nx/ui-components/
  - pages: https://bobeenlee.github.io/bbl-nx/bbl-nextjs/
- Deploy to Vercel
  - https://bbl-nx.vercel.app/

## Dependencies of Graph

```
npx nx graph
```

### Generate UI-Components

```
npm run ui-components:new
```

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/1489321?v=4" width="100px;"/><br /><sub><b>BoBeenLee</b></sub>](https://bbl.netlify.com/)<br />[💬](#question-BoBinLee "Answering Questions") [📝](#blog-BoBinLee "Blogposts") [🐛](https://github.com/BoBinLee/asking-price/issues?q=author%3ABoBinLee "Bug reports") [💻](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Code") [🎨](#design-BoBinLee "Design") [📖](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Documentation") [📋](#eventOrganizing-BoBinLee "Event Organizing") [💡](#example-BoBinLee "Examples") [💵](#financial-BoBinLee "Financial") [🔍](#fundingFinding-BoBinLee "Funding Finding") [🤔](#ideas-BoBinLee "Ideas, Planning, & Feedback") [🚇](#infra-BoBinLee "Infrastructure (Hosting, Build-Tools, etc)") [📦](#platform-BoBinLee "Packaging/porting to new platform") [🔌](#plugin-BoBinLee "Plugin/utility libraries") [👀](#review-BoBinLee "Reviewed Pull Requests") [📢](#talk-BoBinLee "Talks") [⚠️](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Tests") [🔧](#tool-BoBinLee "Tools") [🌍](#translation-BoBinLee "Translation") [✅](#tutorial-BoBinLee "Tutorials") [📹](#video-BoBinLee "Videos") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->
