---
path: '/blog/use-effect-event'
title: 'React useEffectEvent란 무엇인가?'
published: true
date: '2023-03-12'
---

어떠한 메시지 이벤트 리스너를 구현한다면 useEffect내 이벤트 핸들러 구현을 진행합니다.
그리고 roomId에 의존성을 추가하여 해당 값이 변경(reactive value)될때마다 다시 이벤트 리스너를 갱신할 것입니다.
만일 theme과 같은 어떠한 속성 값이 추가되었을 경우, 동일하게 의존성을 추가하면 될것인가?

```tsx
function useMessage(roomId) {
// 1)
useEffect(() => {
    const handleMemssage = (data) => {
        // roomId를 이용한 어떠한 작업
    };
    window.addEventListener('message', handleMemssage)
    return () => window.removeEventListener(handleMemssage)
}, [roomId])

// 2) or 3) useCallback 없이
const handleMemssage = useCallback((data) => {
    // roomId를 이용한 어떠한 작업
}, [roomId])

useEffect(() => {
    window.addEventListener('message', handleMemssage)
    return () => window.removeEventListener(handleMemssage)
}, [handleMemssage])
}
```

theme을 추가하게 되었을 경우 아래와 같이 의존성을 추가하게되는데 그럴 경우 theme이 변경될때마다 message 리스너가 제거되고 추가되면서 갱신됩니다.
만일 어떤한 소켓 연결과같이 connected, disconnected의 비용이 있는 상태라면 비효율적으로 계속 갱신하는 상태가 될것입니다.
theme과 같이 이벤트 리스너(addEventListener, removeEventListener) effect엔 반응하지 않으면서 메시지핸들러 함수(handleMemssage)상태를 갱신할 수 있을까?

```tsx
function useMessage(roomId, theme) {
// 1)
useEffect(() => {
    const handleMemssage = (data) => {
        // roomId, theme를 이용한 어떠한 작업
    };
    // connected에 대한 비용이 있다라면 theme변경때마다 매번 add, remove하기에 퍼포먼스 측면에서 좋지 못해진다.
    window.addEventListener('message', handleMemssage)
    return () => window.removeEventListener(handleMemssage)
}, [roomId, theme])
}
```

[beta.reactjs](https://beta.reactjs.org/learn/separating-events-from-effects#)에선 useEffectEvent 활용 방안에 대해 제시해줍니다.
만일 이전 버젼을 사용하는 개발 코드라면? 아래와 같은 코드로 직접 useEffectEvent 훅 구현하여 활용할 수 있습니다.
동작 원리는 ref참조 훅을 활용하여 함수 호출 구문을 기억하고 theme이 변경되었을 경우 refHandler.current함수를 갱신하여 클로저를 통해 이벤트 핸들러 함수 상태를 갱신하는 방법입니다.

```tsx
function useEffectEvent(handler) {
  const refHandler = useRef();

  useEffect(() => {
    refHandler.current = handler;
  }, [handler]);

  return (...args) => refHandler.current?.(...args);
}
```

## Example
- https://codesandbox.io/s/useeffectevent-previous-version-6909tc?file=/App.js

## 케이스
- 소켓, 메시지와 같이 이벤트 리스너와 이벤트 핸들러 effect 반응에 대한 분리를 해야하는 경우

## Reference

- https://beta.reactjs.org/reference/react/useEffectEvent