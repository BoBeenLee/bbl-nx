// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    updatePostsContext:
      | 'done.invoke.postMachine.FetchingPosts.FetchingTistories.Fetching:invocation[0]'
      | 'done.invoke.postMachine.FetchingPosts.FetchingMD.Fetching:invocation[0]';
  };
  internalEvents: {
    'done.invoke.postMachine.FetchingPosts.FetchingTistories.Fetching:invocation[0]': {
      type: 'done.invoke.postMachine.FetchingPosts.FetchingTistories.Fetching:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.postMachine.FetchingPosts.FetchingMD.Fetching:invocation[0]': {
      type: 'done.invoke.postMachine.FetchingPosts.FetchingMD.Fetching:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    fetchTistories: 'done.invoke.postMachine.FetchingPosts.FetchingTistories.Fetching:invocation[0]';
    fetchMD: 'done.invoke.postMachine.FetchingPosts.FetchingMD.Fetching:invocation[0]';
  };
  missingImplementations: {
    actions: 'updatePostsContext';
    services: 'fetchTistories' | 'fetchMD';
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    fetchTistories: 'xstate.init';
    fetchMD: 'xstate.init';
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | 'FetchingPosts'
    | 'FetchingPosts.FetchingTistories'
    | 'FetchingPosts.FetchingTistories.Fetching'
    | 'FetchingPosts.FetchingTistories.Done'
    | 'FetchingPosts.FetchingTistories.Error'
    | 'FetchingPosts.FetchingMD'
    | 'FetchingPosts.FetchingMD.Fetching'
    | 'FetchingPosts.FetchingMD.Done'
    | 'FetchingPosts.FetchingMD.Error'
    | 'Done'
    | {
        FetchingPosts?:
          | 'FetchingTistories'
          | 'FetchingMD'
          | {
              FetchingTistories?: 'Fetching' | 'Done' | 'Error';
              FetchingMD?: 'Fetching' | 'Done' | 'Error';
            };
      };
  tags: never;
}
