---
title: "React prod, staging, dev 환경 설정하기"
date: "2018-07-08"
published: false
tags:
  - React
  - React Native
  - Environment
---

React prod, staging, dev 환경 설정하기

[crn](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables), [crna](https://movie.naver.com/movie/bi/mi/basic.nhn?code=115622)에서 외부 환경 설정을 추가하는 방법에 대해 다룬다.
prod, dev환경 별 환경변수를 받으러면
crn같은 경우 기본적으로 [.env.local, .env.development, .env.production, .env.test](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#what-other-env-files-can-be-used)을 제공해주는거 같고
crna는 각 환경에 따른 환경 설정을 하려면 [react native config](https://github.com/luggit/react-native-config)나 [react native dotenv](https://github.com/zetachang/react-native-dotenv)(.env만 사용가능함)를 이용할 수 있겠다.

만일 staging 환경을 추가하고 싶다라는 고민에서 기본적으로 제공하는 문서로는 다루기가 힘든다라는 것을 알고 다른 방안을 찾아보게 되었다.

- React App

[package.json](https://github.com/BoBeenLee/environment-config-example/blob/react/package.json)

```
...
 "scripts": {
    "start": "cp ./.env.dev ./.env && react-scripts start",
    "start:staging": "cp ./.env.staging ./.env && react-scripts start",
    "start:production": "cp ./.env.prod ./.env && react-scripts start",
  }
...
```

스크립트 단에서 실행방법을 나누고 cp로 .env에 복사 후 각 환경별로 환경변수를 받고 실행하는 방법이다. <br/>
내가 발견한 것들 중에 가장 깔끔한? 방법인거 같고 코드에 영향도도 가장 적고 관리하는데 가장 좋은 방법이라 생각한다.

- React Native App

[package.json](https://github.com/BoBeenLee/environment-config-example/blob/react-native/package.json)

```
...
"scripts": {
    "start": "./scripts/pre-build.sh development && react-native-scripts start",
    "start:staging": "./scripts/pre-build.sh staging && react-native-scripts start",
    "start:production": "./scripts/pre-build.sh production && react-native-scripts start",
  },
...
```

react native는 쉘 스크립트를 이용한 관리 방법이다.
[pre-build.sh](https://github.com/BoBeenLee/environment-config-example/blob/react-native/scripts/pre-build.sh)는 환경별로 REACT_NATIVE_ENV키 값을 생성하여 [config.json](https://github.com/BoBeenLee/environment-config-example/blob/react-native/config.json)에 덮어씌운다.
그리고 [environment.js](https://github.com/BoBeenLee/environment-config-example/blob/react-native/environment.js)을 만들어 환경별 필요한 변수들을 세팅하여 전달한다.

### dotenv나 config라이브러리를 사용하지 않았던 이유

- react native config
  물론 getting started 보고 설정하면 원활히 동작할 수 있겠지만 관리 측면에서 react native config 호환도 유지해야한다는 점에 오히려 불편하다는 걸 알게되었다. 그런 이유로 사용하지 않았던거같다.
- dotenv
  crn은 내부적으로 설정 되어있지만 한정적인 설정밖에 안되어 이용하기 불편했던거같다. (ex) .env.staging 설정) <br/>
  react native dotenv는 [.env만 사용가능](https://github.com/zetachang/react-native-dotenv)하여 제외 대상이었다.
  물론 아래와 같은 식으로 환경변수를 .env에 전달 받는 방법도 있겠다.
  .env

```
REACT_ENV=$REACT_ENV
```

package.json

```
"scripts": {
	"start": "REACT_ENV=staging && react-scripts start"
}
```

다만 react native에는 OS 환경에 환경변수 설정 후 appcenter환경에서 빌드 시엔 정상적으로 인식을 못했던거같다. ( react-native-dotenv의 이슈인지 정확히 모르겠지만 )

환경별 환경변수 설정은 다양한 방법이 존재하겠지만 아직까진 위와 같은 방법이 가장 심플한 경험을 받았다.
각 환경별 환경변수 설정 Example을 공유한다.

React

- https://github.com/BoBeenLee/environment-config-example/tree/react

React Native

- https://github.com/BoBeenLee/environment-config-example/tree/react-native

Node

- https://github.com/BoBeenLee/environment-config-example/tree/node
