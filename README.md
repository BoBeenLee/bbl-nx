# bbl-nx

[![Netlify Status](https://api.netlify.com/api/v1/badges/9df06975-e9cf-4761-bf57-48f6f970c96b/deploy-status)](https://app.netlify.com/sites/bbl/deploys)
![GitHub deployments](https://img.shields.io/github/deployments/BoBeenLee/bbl-nx/production?label=vercel&logo=vercel&logoColor=white)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

blog & homepage project based on monorepo(nx)

- bbl-nextjs
- bbl-remix

## Feature

- Nextjs, Remix
- [CSS Grid Layout](https://www.youtube.com/watch?v=7kVeCqQCxlk)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Storybook](https://github.com/storybooks/storybook)
- [Nx.dev](https://nx.dev/)

## Prerequisites

node version 16.13.2

## Installing / Getting started

```shell
yarn install
npm i --legacy-peer-deps
```

### Setting up Dev

```
yarn start
npm start
```

## Tests

### Running unit tests

```
yarn test:affected
```

## Deployment

- Deploy to Storybook
  - github action master 브랜치 기준 github pages로 배포 진행합니다.
  - ui-components: https://bobeenlee.github.io/bbl-nx/ui-components/
  - organizations: https://bobeenlee.github.io/bbl-nx/organizations/
- Deploy to Vercel
  - https://bbl-nx.vercel.app/

## State Diagram

- Post 조회
[![Post Machine](https://stately.ai/registry/machines/d896bb7e-cfde-4a9c-b62e-cb716c43df7d.png)](https://stately.ai/viz/d896bb7e-cfde-4a9c-b62e-cb716c43df7d)
  
## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/1489321?v=4" width="100px;"/><br /><sub><b>BoBeenLee</b></sub>](https://bbl.netlify.com/)<br />[💬](#question-BoBinLee "Answering Questions") [📝](#blog-BoBinLee "Blogposts") [🐛](https://github.com/BoBinLee/asking-price/issues?q=author%3ABoBinLee "Bug reports") [💻](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Code") [🎨](#design-BoBinLee "Design") [📖](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Documentation") [📋](#eventOrganizing-BoBinLee "Event Organizing") [💡](#example-BoBinLee "Examples") [💵](#financial-BoBinLee "Financial") [🔍](#fundingFinding-BoBinLee "Funding Finding") [🤔](#ideas-BoBinLee "Ideas, Planning, & Feedback") [🚇](#infra-BoBinLee "Infrastructure (Hosting, Build-Tools, etc)") [📦](#platform-BoBinLee "Packaging/porting to new platform") [🔌](#plugin-BoBinLee "Plugin/utility libraries") [👀](#review-BoBinLee "Reviewed Pull Requests") [📢](#talk-BoBinLee "Talks") [⚠️](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Tests") [🔧](#tool-BoBinLee "Tools") [🌍](#translation-BoBinLee "Translation") [✅](#tutorial-BoBinLee "Tutorials") [📹](#video-BoBinLee "Videos") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->