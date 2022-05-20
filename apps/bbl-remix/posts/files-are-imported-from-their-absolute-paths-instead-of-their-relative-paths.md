---
path: '/post/files-are-imported-from-their-absolute-paths-instead-of-their-relative-paths'
title: React 상대경로 -> 절대경로 변경
date: '2018-04-04'
published: true
tags:
  - javascript
---

## 상대경로 설정 시 문제점

```javascript
import utils from '../../../../utils/my-utils';
```

와 같이 패키지 구조가 깊어질 경우 임포트하기 번거로워지게 된다.

```
import utils from 'utils/my-utils';
```

와 같이 간단하게 임포트할 수 없을까?

## 지정된 절대경로로 임포트하기

#### 상대경로를 지정된 절대경로로 바꾸는 방법은 세가지 정도 있는듯하다.

- Babel
- Webpack, Fusebox, ... ( module bundlers )
- create-react-app, create-react-app-ts

### Babel

- React Native, React <br/>
  - [babel플러그인](https://github.com/tleunen/babel-plugin-module-resolver)을 이용하여 설정을 하면 간단하게 해결할 수 있다. <br/>
    ```
    "plugins": [
        "transform-react-jsx-source",
        [
          "module-resolver",
          {
            "alias": {
              "~/*": "./src"
            },
            "cwd": "babelrc"
          }
        ]
      ]
    ```
    위와같이 .babelrc 설정을 해주면 src폴더 기준 '~/utils/my-utils'가 가능하다.<br/>
    babel을 이용하는 프로젝트라면 리액트가 아니더라도 사용가능하여 가장 간단한 해결방안인듯 싶다.
  - [샘플소스](https://github.com/BoBeenLee/absolute-sample/tree/2-react-native-ts)

### Webpack, Fusebox

- Webpack
  - webpack.config.js 설정
  ```
   resolve: {
     modules: [
       path.join(__dirname, "src"),
       "node_modules"
     ]
   }
  ```
  - [샘플소스](https://github.com/BoBeenLee/absolute-sample/tree/4-webpack)
- Fusebox
  - fuse.js에 homeDir 설정
  ```
   FuseBox.init({
     homeDir: "src",
     ...
  ```
  처럼 homeDir만 지정해주면 homeDirectory기준 '~/utils/my-utils'가 가능하다.
  - [샘플소스](https://github.com/BoBeenLee/absolute-sample/tree/3-fusebox-ts)

### create-react-app, create-react-app-ts

- .env파일에 NODE_PATH=src/ 설정만 하면 끝.
- [샘플소스](https://github.com/BoBeenLee/absolute-sample/tree/1-create-react-app)

## [VSCode path 설정](https://code.visualstudio.com/docs/languages/jsconfig).

자바스크립트일 경우 jsconfig.json <br/>
타입스크립트일 경우 tsconfig.json 설정을 따로 해줘야한다.

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "*": [
        "*",
        "src/*"
      ]
    }
  }
}
```

### Pitfall

- 스토리북 tsconfig 설정 https://github.com/dividab/tsconfig-paths-webpack-plugin
