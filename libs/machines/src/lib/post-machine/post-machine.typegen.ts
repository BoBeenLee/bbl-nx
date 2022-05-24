// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    'Post 리스트 업데이트':
      | 'done.invoke.postMachine.Post 조회.티스토리 조회.조회 중:invocation[0]'
      | 'done.invoke.postMachine.Post 조회.MD 조회.조회 중:invocation[0]';
  };
  internalEvents: {
    'done.invoke.postMachine.Post 조회.티스토리 조회.조회 중:invocation[0]': {
      type: 'done.invoke.postMachine.Post 조회.티스토리 조회.조회 중:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.postMachine.Post 조회.MD 조회.조회 중:invocation[0]': {
      type: 'done.invoke.postMachine.Post 조회.MD 조회.조회 중:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    '티스토리 조회': 'done.invoke.postMachine.Post 조회.티스토리 조회.조회 중:invocation[0]';
    'MD 호출': 'done.invoke.postMachine.Post 조회.MD 조회.조회 중:invocation[0]';
  };
  missingImplementations: {
    actions: 'Post 리스트 업데이트';
    services: '티스토리 조회' | 'MD 호출';
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    '티스토리 조회': 'xstate.init';
    'MD 호출': 'xstate.init';
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | 'Post 조회'
    | 'Post 조회.티스토리 조회'
    | 'Post 조회.티스토리 조회.조회 중'
    | 'Post 조회.티스토리 조회.조회 완료'
    | 'Post 조회.티스토리 조회.조회 실패'
    | 'Post 조회.MD 조회'
    | 'Post 조회.MD 조회.조회 중'
    | 'Post 조회.MD 조회.조회 완료'
    | 'Post 조회.MD 조회.조회 실패'
    | 'Post 조회 완료'
    | {
        'Post 조회'?:
          | '티스토리 조회'
          | 'MD 조회'
          | {
              '티스토리 조회'?: '조회 중' | '조회 완료' | '조회 실패';
              'MD 조회'?: '조회 중' | '조회 완료' | '조회 실패';
            };
      };
  tags: never;
}
