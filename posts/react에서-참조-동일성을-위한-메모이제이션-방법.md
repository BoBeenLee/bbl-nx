---
path: '/blog/react에서-참조-동일성을-위한-메모이제이션-방법'
title: 'React에서 참조 동일성을 위한 메모이제이션 방법'
published: false
date: '2022-06-21'
tags:
  - javascript
  - react
---

## Background

## Solution

- `useMemo`

- `React.memo, React.PureComponent, shouldComponentUpdate`

  - functional component

  - class component
    - React.PureComponent
    - shouldComponentUpdate

- `memoize 함수를 이용한 참조 동일성 메모이제이션 적용`

  -
  - 준비물
    - [isEquals](https://lodash.com/docs/4.17.15#isEqual)
      - deepEquals를 하기위한 용도
    - memoize 함수
      - ex) https://github.com/alexreardon/memoize-one
  - 구현 예시

    ```ts
    import memoizeOne from 'memoize-one';
    import isEqual from 'lodash.isequal';

    export const identity = <T>(x: T): T => x;

    export const deepMemoized = memoizeOne(identity, isEqual) as <T>(x: T) => T;
    ```
