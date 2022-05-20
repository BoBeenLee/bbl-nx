# bbl-nx

[![Netlify Status](https://api.netlify.com/api/v1/badges/9df06975-e9cf-4761-bf57-48f6f970c96b/deploy-status)](https://app.netlify.com/sites/bbl/deploys)
![GitHub deployments](https://img.shields.io/github/deployments/BoBeenLee/bbl-nx/production?label=vercel&logo=vercel&logoColor=white)

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

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
