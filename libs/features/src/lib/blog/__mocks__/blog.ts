export const mockBlogId = {
  slug: 'micro-generator-plop',
  title: 'micro generator PLOP 란?',
  createdAt: '2022-06-21',
  content:
    '<h3><a href="https://github.com/plopjs/plop">Plop</a>란 무엇인가?</h3>\n' +
    '<ul>\n' +
    '<li>micro generator framework라 불립니다. 우리가 자주 겪는 동일한 패턴의 구조 생성(routes, controllers, components...)을 <strong>일관성</strong> 있는 방법으로 생성해줍니다.</li>\n' +
    '<li>그리고 또한 best practice(가장 이상적인 생성방법)라 불리는 우리 코드 베이스가 되는 방법으로 생성해주기에 best practice를 찾는 과정이나 생성하는 과정에 대한 고민을 줄여줍니다.</li>\n' +
    '<li>inquirer prompts, handlebar templates 베이스로 작성되어있기에 두가지에 익숙하다면 사용하는덴 크게 무리가 없을겁니다.</li>\n' +
    '</ul>\n' +
    '<h3>사용하는 목적은?</h3>\n' +
    '<ul>\n' +
    '<li>Plop를 사용하는 목적은 정말 단순하면서 명확하게 위에서 설명했듯이 routes, controllers, components 생성에 있어 일관된 best practice 코드 생성을 함으로써 처음 코드 베이스 생성에 있는 고민을 줄여주기에 해당 부분이 가장 큰이유이지 않을까 싶습니다.</li>\n' +
    '<li>그외 <a href="https://github.com/plopjs/plop#why-generators">내용</a>은 여기서 볼 수 있습니다.\n' +
    '<ul>\n' +
    '<li>시간 절약, 워크플로 자동화에 대한 내용</li>\n' +
    '</ul>\n' +
    '</li>\n' +
    '</ul>\n' +
    '<h3>내가 생각하는 언제 코드 제너레이터(Plop)를 적용하는게 좋을까</h3>\n' +
    '<ul>\n' +
    '<li>그런 이유로 해당 부분을 적용하기 좋은 타이밍은 처음 회사에 딱 들어갔을때 온보딩하면서 기존 코드 베이스 기반 생성을 처음 고민하는 그순간이 설득하고 Plop 적용하기 딱 좋은 시기가 아닐까 싶습니다.</li>\n' +
    '<li>다만 적용한다면 약간?의 업무가 좀더 늘어나겠지만 그만큼 다음 사람을 위해서, 다른 개발자들을 위해 만들어두는것이 좋지 않을까</li>\n' +
    '</ul>\n' +
    '<h3>Plop 설치, 간단하게 만들어보기</h3>\n' +
    '<ul>\n' +
    '<li><a href="https://github.com/plopjs/plop#installation">installation</a>에 잘 설명되어있기에 차근차근 보고 따라하면 큰 무리없이 할 수 있습니다.</li>\n' +
    '</ul>\n' +
    '<h3>Plop를 적용 예시</h3>\n' +
    '<ul>\n' +
    '<li>각종 형식에 따른 예시는 <a href="https://github.com/plopjs/plop/tree/main/packages/plop/tests/examples">여기</a>서 볼 수 있습니다.</li>\n' +
    '<li>컴포넌트 생성\n' +
    '<ul>\n' +
    '<li><a href="https://github.com/BoBeenLee/bbl-nx/commit/09ae7a72d4d032db71fe5cb83f12685934c7266b">나의 홈페이지 컴포넌트 생성 Plop</a></li>\n' +
    '</ul>\n' +
    '</li>\n' +
    '</ul>\n' +
    '<h3>나의 생각</h3>\n' +
    '<ul>\n' +
    '<li>이전 회사에서 코드 작성할때 코드 베이스 찾는 시간이 가끔씩 오래 걸려서 그렇다고 generator를 만들자니 오래 걸릴거같고 찾아서 사용하자니 불편한 고충들이 있었습니다.</li>\n' +
    '<li>제가 생각하는 자주 사용할 수 있는 라이브러리고 generator 코드를 짜는데 그렇게 어렵지도 않기에 배워두면 요긴하게 써먹고 선임분한테 이쁨받을 수 있을듯한?</li>\n' +
    '</ul>\n',
};

export const mockBlogs = [
  {
    createdAt: '2022-06-21',
    id: 'micro-generator-plop',
    title: 'micro generator PLOP 란?',
    url: '/blog/micro-generator-plop',
    published: true,
    isExternal: false,
  },
  {
    createdAt: '2018-07-08',
    id: 'react-prod-staging-dev-환경-설정하기',
    title: 'React prod, staging, dev 환경 설정하기',
    url: '',
    published: false,
    isExternal: false,
  },
  {
    createdAt: '2018-04-04',
    id: 'files-are-imported-from-their-absolute-paths-instead-of-their-relative-paths',
    title: 'React 상대경로 -> 절대경로 변경',
    url: '/blog/files-are-imported-from-their-absolute-paths-instead-of-their-relative-paths',
    published: true,
    isExternal: false,
  },
  {
    createdAt: '2018-03-24',
    id: 'async-generator',
    title: 'Async Generator And Redux Saga',
    url: '/blog/async-generator',
    published: false,
    isExternal: false,
  },
  {
    createdAt: '2018-03-23',
    id: 'list-map',
    title: 'list-map',
    url: '/blog/list-map',
    published: false,
    isExternal: false,
  },
  {
    createdAt: '2018-03-23',
    id: 'oop-fp-pp',
    title: 'oop-ffp-pp',
    url: '/blog/oop-ffp-pp',
    published: false,
    isExternal: false,
  },
  {
    createdAt: '2018-03-15',
    id: 'ui-ux',
    title: 'ui-ux',
    url: '/blog/ui-ux',
    published: false,
    isExternal: false,
  },
  {
    createdAt: '2018-03-13',
    id: 'proxy-decorator-pattern',
    title: 'Proxy Decorator Pattern',
    url: '/blog/proxy-decorator-pattern',
    published: false,
    isExternal: false,
  },
  {
    createdAt: '2018-03-12',
    id: 'debounce-throttle',
    title: 'React Debounce and Throttle',
    url: '/blog/react-debounce-and-throttle',
    published: false,
    isExternal: false,
  },
  {
    createdAt: '2018-03-11',
    id: 'function-compare-code',
    title: 'React For pure function compare',
    url: '/blog/function-compare-code',
    published: false,
    isExternal: false,
  },
  {
    createdAt: '2018-03-09',
    id: 'typeorm-like-jpa',
    title: 'Typeorm like jpa',
    url: '/blog/typeorm-like-jpa',
    published: false,
    isExternal: false,
  },
  {
    createdAt: '2018-03-08',
    id: 'react-facc-hoc',
    title: 'Function as Child Component And High Order Component',
    url: '/blog/react-facc-hoc',
    published: true,
    isExternal: false,
  },
  {
    createdAt: '2018-02-25',
    id: 'react-environment',
    title: 'React Custom Environment',
    url: '/blog/react-environment',
    published: true,
    isExternal: false,
  },
  {
    createdAt: '2018-01-22T05:24:36.000Z',
    id: 'https://cultist-tp.tistory.com/264',
    title: 'Scroll Down 화면 만들기',
    url: 'https://cultist-tp.tistory.com/entry/Scroll-Down-%ED%99%94%EB%A9%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0',
    published: true,
    isExternal: true,
  },
  {
    createdAt: '2017-10-15T10:33:34.000Z',
    id: 'https://cultist-tp.tistory.com/263',
    title: '푸터 하단 고정 시키기',
    url: 'https://cultist-tp.tistory.com/entry/%ED%91%B8%ED%84%B0-%ED%95%98%EB%8B%A8-%EA%B3%A0%EC%A0%95-%EC%8B%9C%ED%82%A4%EA%B8%B0',
    published: true,
    isExternal: true,
  },
  {
    createdAt: '2017-10-15T09:48:29.000Z',
    id: 'https://cultist-tp.tistory.com/262',
    title: 'IOS Safari minimal-ui 적용기',
    url: 'https://cultist-tp.tistory.com/entry/IOS-Safari-minimalui-%EC%A0%81%EC%9A%A9%EA%B8%B0',
    published: true,
    isExternal: true,
  },
  {
    createdAt: '2017-09-01T08:33:46.000Z',
    id: 'https://cultist-tp.tistory.com/261',
    title: 'Node 버전 관리',
    url: 'https://cultist-tp.tistory.com/entry/Node-%EB%B2%84%EC%A0%84-%EA%B4%80%EB%A6%AC',
    published: true,
    isExternal: true,
  },
  {
    createdAt: '2017-08-16T21:11:29.000Z',
    id: 'https://cultist-tp.tistory.com/260',
    title: 'React Reducer 관리',
    url: 'https://cultist-tp.tistory.com/entry/React-Reducer-%EA%B4%80%EB%A6%AC',
    published: true,
    isExternal: true,
  },
  {
    createdAt: '2017-07-28T12:29:16.000Z',
    id: 'https://cultist-tp.tistory.com/259',
    title: 'React Heroku 초기 세팅.',
    url: 'https://cultist-tp.tistory.com/entry/React-Heroku-%EC%B4%88%EA%B8%B0-%EC%84%B8%ED%8C%85',
    published: true,
    isExternal: true,
  },
  {
    createdAt: '2017-06-12T09:00:21.000Z',
    id: 'https://cultist-tp.tistory.com/258',
    title: 'SOLID',
    url: 'https://cultist-tp.tistory.com/entry/SOLID',
    published: true,
    isExternal: true,
  },
  {
    createdAt: '2017-06-12T07:45:19.000Z',
    id: 'https://cultist-tp.tistory.com/257',
    title: '소나 버그 잡기',
    url: 'https://cultist-tp.tistory.com/entry/%EC%86%8C%EB%82%98-%EB%B2%84%EA%B7%B8-%EC%9E%A1%EA%B8%B0',
    published: true,
    isExternal: true,
  },
  {
    createdAt: '2017-06-12T07:41:35.000Z',
    id: 'https://cultist-tp.tistory.com/256',
    title: 'QueryDSL 문서',
    url: 'https://cultist-tp.tistory.com/entry/QueryDSL-%EB%AC%B8%EC%84%9C',
    published: true,
    isExternal: true,
  },
  {
    createdAt: '2017-06-12T07:38:13.000Z',
    id: 'https://cultist-tp.tistory.com/255',
    title: '엑셀 SQL 구문 추출',
    url: 'https://cultist-tp.tistory.com/entry/%EC%97%91%EC%85%80-SQL-%EA%B5%AC%EB%AC%B8-%EC%B6%94%EC%B6%9C',
    published: true,
    isExternal: true,
  },
];
