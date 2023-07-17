---
path: '/blog/function-compare-code'
title: 'React For pure function compare'
published: false
date: '2018-03-11'
---

FaCC(Function as Child Component) 구현시 함수를 넘겨주는 데 PureComponent로 shallow comparing하면은 함수 비교시 원하는대로 동작을 안할 것이다. <br/>

그래서 함수비교 snippet코드를 작성해두려한다.
다만 간단한 가정을 기준으로 비교한다.

- Impure Function이어야한다.
- Input(Parameter)은 동일하게 전달받는다.

### [Reference](https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/template/README.md#adding-custom-environment-variables)
