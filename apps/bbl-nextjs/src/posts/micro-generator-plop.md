---
path: '/post/micro-generator-plop'
title: 'micro generator PLOP 란?'
published: true
date: '2021-10-01'
tag: javascript,typescript,plop,generator
---

## [Plop](https://github.com/plopjs/plop)란 무엇인가?

- micro generator framework라 불립니다. 우리가 자주 겪는 동일한 패턴의 구조 생성(routes, controllers, components...)을 **일관성** 있는 방법으로 생성해줍니다.
- 그리고 또한 best practice(가장 이상적인 생성방법)라 불리는 우리 코드 베이스가 되는 방법으로 생성해주기에 best practice를 찾는 과정이나 생성하는 과정에 대한 고민을 줄여줍니다.
- inquirer prompts, handlebar templates 베이스로 작성되어있기에 두가지에 익숙하다면 사용하는덴 크게 무리가 없을겁니다.

## 사용하는 목적은?

- Plop를 사용하는 목적은 정말 단순하면서 명확하게 위에서 설명했듯이 routes, controllers, components 생성에 있어 일관된 best practice 코드 생성을 함으로써 처음 코드 베이스 생성에 있는 고민을 줄여주기에 해당 부분이 가장 큰이유이지 않을까 싶습니다.
- 그외 [내용](https://github.com/plopjs/plop#why-generators)은 여기서 볼 수 있습니다.
    - 시간 절약, 워크플로 자동화에 대한 내용

## 내가 생각하는 언제 코드 제너레이터(Plop)를 적용하는게 좋을까
- 그런 이유로 해당 부분을 적용하기 좋은 타이밍은 처음 회사에 딱 들어갔을때 온보딩하면서 기존 코드 베이스 기반 생성을 처음 고민하는 그순간이 설득하고 Plop 적용하기 딱 좋은 시기가 아닐까 싶습니다.
- 다만 적용한다면 약간?의 업무가 좀더 늘어나겠지만 그만큼 다음 사람을 위해서, 다른 개발자들을 위해 만들어두는것이 좋지 않을까

## Plop 설치, 간단하게 만들어보기
- [installation](https://github.com/plopjs/plop#installation)에 잘 설명되어있기에 차근차근 보고 따라하면 큰 무리없이 할 수 있습니다.

## Plop를 적용 예시
- 각종 형식에 따른 예시는 [여기](https://github.com/plopjs/plop/tree/main/packages/plop/tests/examples)서 볼 수 있습니다.
- 컴포넌트 생성
  - [나의 홈페이지 컴포넌트 생성 Plop](https://github.com/BoBeenLee/bbl-nx/commit/09ae7a72d4d032db71fe5cb83f12685934c7266b)

## 나의 생각
- 이전 회사에서 코드 작성할때 코드 베이스 찾는 시간이 가끔씩 오래 걸려서 그렇다고 generator를 만들자니 오래 걸릴거같고 찾아서 사용하자니 불편한 고충들이 있었습니다.
- 제가 생각하는 자주 사용할 수 있는 라이브러리고 generator 코드를 짜는데 그렇게 어렵지도 않기에 배워두면 요긴하게 써먹고 선임분한테 이쁨받을 수 있을듯한?

