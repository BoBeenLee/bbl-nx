// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    updatePostsContext:
      | 'UPDATE'
      | 'done.invoke.postMachine.FetchingPosts.FetchingMD.Fetching:invocation[0]';
  };
  internalEvents: {
    'done.invoke.postMachine.FetchingPosts.FetchingMD.Fetching:invocation[0]': {
      type: 'done.invoke.postMachine.FetchingPosts.FetchingMD.Fetching:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    fetchMD: 'done.invoke.postMachine.FetchingPosts.FetchingMD.Fetching:invocation[0]';
  };
  missingImplementations: {
    actions: never;
    services: 'fetchMD';
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    fetchMD: 'xstate.init';
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | 'FetchingPosts'
    | 'FetchingPosts.FetchingTistories'
    | 'FetchingPosts.FetchingTistories.Done'
    | 'FetchingPosts.FetchingTistories.Error'
    | 'FetchingPosts.FetchingTistories.Initial'
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
              FetchingTistories?: 'Done' | 'Error' | 'Initial';
              FetchingMD?: 'Fetching' | 'Done' | 'Error';
            };
      };
  tags: never;
}
