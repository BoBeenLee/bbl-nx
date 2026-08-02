module.exports = {
  snapshotFormat: { escapeString: true, printBasicPrototype: true },
  // 컴포넌트 스펙이 render() 를 호출하고 jest.setupTests.base.js 가 window.matchMedia 를
  // 대입한다. 이게 없으면 testEnvironment 가 'node' 로 떨어져 "window is not defined" 로 전부 죽는다.
  // (@nx/jest/preset 을 제거할 때 같이 사라졌던 설정)
  testEnvironment: 'jsdom',
  // libs/constants, libs/hooks, libs/libs 는 스펙 파일이 없다. 없다고 exit 1 하면
  // turbo run test 가 통째로 실패한다.
  passWithNoTests: true,
  moduleNameMapper: {
    // 에셋/스타일은 스텁으로 대체한다.
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/../../__tests__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/../../__tests__/fileMock.js',
    // @bbl-nx/* 워크스페이스 별칭. pnpm 은 워크스페이스 패키지를 그것을 선언한 패키지에만
    // 링크하므로 libs 끼리는 node 해석으로 서로를 찾지 못한다. tsconfig.base.json 의
    // paths 와 이 표를 항상 같이 고쳐야 한다.
    '^@bbl-nx/constants$': '<rootDir>/../../libs/constants/src/index.ts',
    '^@bbl-nx/features/(.*)$': '<rootDir>/../../libs/features/src/lib/$1',
    '^@bbl-nx/hooks$': '<rootDir>/../../libs/hooks/src/index.ts',
    '^@bbl-nx/images$': '<rootDir>/../../libs/images/src/index.ts',
    '^@bbl-nx/libs$': '<rootDir>/../../libs/libs/src/index.ts',
    '^@bbl-nx/ui-components/(.*)$': '<rootDir>/../../libs/ui-components/src/lib/$1',
    '^@bbl-nx/utils$': '<rootDir>/../../libs/utils/src/index.ts',
    '^@bbl-nextjs/(.*)$': '<rootDir>/../../apps/bbl-nextjs/src/$1',
  },
};
