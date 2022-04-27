---
path: "/post/react-environment"
title: "React Custom Environment"
published: true
date: "2018-02-25"
---

요약하면 dotenv 설정 시 crna 를 이용할 경우, <br/>.env 파일에 NODE*ENV 환경 설정 가능하고 <br/>다른 환경 변수를 설정 시엔 REACT_APP*\* 변수로 지정하면 React 코드 환경에서 환경변수를 불러 올 수 있다. <br/>
:warning: crna 이용하면 [dotenv](https://github.com/motdotla/dotenv)는 따로 인스톨하지 않아도 된다. <br/>
ex) `.env NODE_ENV=production REACT_APP_TOKEN=token` <br/>

- 환경변수는 빌드타임에 값을 세팅한다.
- 런타임으로 환경변수 불러오려면 서버가 필요하다.
  <br/>

## More Features

- Referencing Environment Variables in the HTML
  - `<title>%REACT_APP_TOKEN%</title>` <br/>
    이런식으로 환경변수를 HTML 에 직접 접근 가능하다.
- Adding Temporary Environment Variables In Your Shell
  - [cross-env](https://github.com/kentcdodds/cross-env)로 inline 으로 환경설정하여 이용가능하다. <br/>
    `cross-env NODE_ENV=development npm start`
- Adding Development Environment Variables In .env
  - [.env 외 여러 옵션이 가능하다.](https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env)

### [Reference](https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/template/README.md#adding-custom-environment-variables)
