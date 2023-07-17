---
path: '/blog/memo-for-referential-equality-comparing-in-react'
title: 'React에서 참조 동일성을 비교하는 방법'
published: true
date: '2022-07-23'
tags:
  - javascript
  - react
  - memoize
  - memo
---

## Background

- React 개발을 하면서 props 전달 시, object,array,function 형식의 참조 구문으로 전달할 경우가 생긴다.
- 컴포넌트 리렌더링 진행 시 참조 동일성을 생각하지 않고 작성했을 경우, 하위 요소들까지 매번 리렌더링이 발생하는 현상을 겪을 수 있다.
- ex) LoginForm 컴포넌트 input object props전달 예시

```ts
export function LoginForm(props: SeperatorProps) {
  const [email, setEmail] = useState('');
  const inputProps = { size: 24 };
  return (
    <Form>
      <Label>email</Label>
      <Input name="email" value={email} {...inputProps} />
      <Seperator />
    </Form>
  );
}
```

- 로그인 폼이 email값이 아닌 이외의 값으로 변경될때에도 Input컴포넌트가 리렌더링 시도할 것이다.
- 참조 동일성을 유지하려면 어떻게 해야할까?
  - 이와 관련된 부분은 [React Docs에 좋은 해결책](https://reactjs.org/docs/hooks-reference.html#usecallback)을 제시해주고 있다.

## Solution

React hooks, React.memo, React.PureComponent, shouldComponentUpdate에 대해선 많은 참조 문서들이 있으니 따로 설명하진 않고 링크만 남겨두고자한다.

- `useMemo`, `useCallback`, `useRef`
  - [useMemo](https://ko.reactjs.org/docs/hooks-reference.html#usememo)
  - [useCallback](https://ko.reactjs.org/docs/hooks-reference.html#usecallback)
  - [useRef](https://ko.reactjs.org/docs/hooks-reference.html#useref)
    - `ref 값은 리렌더링 사이에 파괴되지 않으며, 새로 생성되지도 않기에 좋은 대안이 될 수 있다.
- `React.memo, React.PureComponent, shouldComponentUpdate`

  - [React.memo를 활용하기](https://ko.reactjs.org/docs/react-api.html#reactmemo)
  - [class component 일 경우](https://ko.reactjs.org/docs/optimizing-performance.html#avoid-reconciliation)
    - React.PureComponent
    - shouldComponentUpdate
      - shallow 비교가 아닌 deep 비교일 경우 주로 사용합니다.

- `memoize 함수를 이용한 참조 동일성 메모이제이션 적용`

  - 위 경우는 React내부, 컴포넌트에서 props를 비교하여 memoized하거나 비교하여 리렌더링 여부를 결정해준다.
  - React외부 호출에서 object,array,function를 재생성하는 경우가 있을 것이다. 이럴 경우 shallow compare로는 [lodash memoize](https://lodash.com/docs/4.17.15#memoize)를 이용할 수 있고 아래와 같이 deep한 비교를 위해서 만들어 작성한다면 React외부 호출을 유지한채 참조 동일성에서 발생한 리렌더링을 방지할 수 있을 것이다.
  - ex) React외부 함수 호출 중 Response 내부에서 컨버팅하면서 발생하는 object, array

- 준비물
  - [isEquals](https://lodash.com/docs/4.17.15#isEqual)
    - deepEquals를 하기위한 용도
- memoize 함수
  - ex) [memoise-one](https://github.com/alexreardon/memoize-one)
- 구현 예시

  ```ts
  import memoizeOne from 'memoize-one';
  import isEqual from 'lodash.isequal';

  export const identity = <T>(x: T): T => x;

  export const deepMemoized = memoizeOne(identity, isEqual) as <T>(x: T) => T;
  ```
