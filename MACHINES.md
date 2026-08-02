# Machines

- 홈페이지 기능 추가될때마다 XState 머신으로 시나리오를 작성합니다.

## Blog Fetching Flow

- MD 블로그 글 조회 상태 시나리오
- `libs/features/src/lib/blog/machines/blog-machine.ts`
- `FetchingBlogs.FetchingMD` 하나만 있는 parallel 머신.
- 주의: `onError`가 향하는 `Error`는 parallel 영역 안의 final state이므로, 조회 실패 시에도
  영역의 `onDone`이 발화해 `Done`에 도달한다. 즉 실패는 예외가 아니라 `blogs: []`로 끝난다.
