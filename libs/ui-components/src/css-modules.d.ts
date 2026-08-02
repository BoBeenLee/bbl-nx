// CSS Modules 앰비언트 선언. 이 파일은 import/export 가 없어야 전역 스크립트로 취급되고
// 그래야 와일드카드 모듈 선언이 적용된다. types/global.d.ts 는 `export {}` 때문에 모듈이라
// 여기에 넣을 수 없다.
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
