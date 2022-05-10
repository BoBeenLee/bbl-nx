# bbl-nx

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

node version 14.17.1

## Installing / Getting started

```shell
yarn install
```

### Setting up Dev

```
yarn start
```

## Tests

### Running unit tests
```
yarn test:affected
```

## Deployment

- Deploy to Storybook
  - github action master브랜치 기준 github pages로 배포 진행합니다.
- Deploy to Vercel
  - In Progress

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
