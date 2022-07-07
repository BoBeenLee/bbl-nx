// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    updateBlogsContext:
      | 'done.invoke.blogMachine.FetchingBlogs.FetchingTistories.Fetching:invocation[0]'
      | 'done.invoke.blogMachine.FetchingBlogs.FetchingMD.Fetching:invocation[0]';
  };
  internalEvents: {
    'done.invoke.blogMachine.FetchingBlogs.FetchingTistories.Fetching:invocation[0]': {
      type: 'done.invoke.blogMachine.FetchingBlogs.FetchingTistories.Fetching:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.blogMachine.FetchingBlogs.FetchingMD.Fetching:invocation[0]': {
      type: 'done.invoke.blogMachine.FetchingBlogs.FetchingMD.Fetching:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    fetchTistories: 'done.invoke.blogMachine.FetchingBlogs.FetchingTistories.Fetching:invocation[0]';
    fetchMD: 'done.invoke.blogMachine.FetchingBlogs.FetchingMD.Fetching:invocation[0]';
  };
  missingImplementations: {
    actions: never;
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
    | 'FetchingBlogs'
    | 'FetchingBlogs.FetchingTistories'
    | 'FetchingBlogs.FetchingTistories.Done'
    | 'FetchingBlogs.FetchingTistories.Error'
    | 'FetchingBlogs.FetchingTistories.Fetching'
    | 'FetchingBlogs.FetchingMD'
    | 'FetchingBlogs.FetchingMD.Fetching'
    | 'FetchingBlogs.FetchingMD.Done'
    | 'FetchingBlogs.FetchingMD.Error'
    | 'Done'
    | {
        FetchingBlogs?:
          | 'FetchingTistories'
          | 'FetchingMD'
          | {
              FetchingTistories?: 'Done' | 'Error' | 'Fetching';
              FetchingMD?: 'Fetching' | 'Done' | 'Error';
            };
      };
  tags: never;
}
