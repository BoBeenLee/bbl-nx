import { createMachine } from 'xstate';

export interface PostItem {
  createdAt: string;
  id: string;
  title: string;
  url: string;
  published: boolean;
  isExternal: boolean;
}

export const postMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAcD2sAuBZAhgYwAsBLAOzADoAxMDQ0qABXQ1iprpKgBUjNUAnInDa1inAMQRUZcqQBuqANYU0mXBwrVR9JplZaO3XhgFD97MVATzUeHBiLSA2gAYAuohToiD6Z5AAHogArMEALOQAbGEAjC7hMTEAHJEATADskQA0IACeiKlhSeQAnC7p4cElqeGpSampAL6NOarY+GKaFjrM5tqcPHyCwgaW4mD8-ALkyAA29gBmAgC2M8zqnSKGuixbloMmw32G1iQKdr4krh5IIKo+jiT+QQihEdFxCclpmTn5CABmAHpcgAyIlEphVJlYJJYJA5qtdYdUhdfqMXp7egHUzCACSEFmYHElAAolwAMIACX890uzwKqRc5GCLhqSRKMUiKTC6QBST+BTh5HikUiLiBwTiMQyiLuyI0WM4O2OliwABElVBJNIKDZlGs1CiZKMenotRqtadzvZHtdad56bcXgCXMyXNUofCXMkMgK8iEPaCXEl0ulYtEgQiWvKjYrTcrMQmoJbk+NJtM5osVob2vHuonzcnUwWrDYLnb3A7YA8-M7EK73Z6aq7fel-f8qiCwzL+UzgtyanK2htUVqVTqZJh7CoFZtkyrq7WnvWECV+eQoekSkkkj6fQCYulBYCw6D0m63fDd3zIs0YyRUBA4NW8-PSyqtTijlql07QC6qQAuQSQyuUvKuvybrZAGCAtiy4bfOuYRuqkMTDnOY4LkmpbfmY5Dqrqf6PAyCAVDE5BhtEO5AnCoYxCeqRpJuPoNCU7brpEMThBhcbvuin7Jnhwikhm-DEXWAGIORlGZGENH8rC6QMbBQIUcCLixDKvLcuE6S8W+WEfjh6LCawBJEhJK5SQgcSpIx24isEF6slxvLuQZo4msZRa4cYuLwLcdIkau7YnkewSlPyAI7nUNRpFynnGmi2wmYYJbolZpF2SeUrAexlQ+lxaGhEl+YCWlaqaoRZBZau8mpKUHqutU7bhEUuUNCBbLya2kTOcEZX8alvnopaolTOJQWOiFNkNU164en67UdiEnKyVy4buRyHJDUZFWjel6p1TZYWwWEYKgjFVQZC44oemEe3eQdLAnYEIRhOFbKlOCMQQjEsR1HESRPRQNVgG9LyfBRmQAkUh7teUq2nupF4oRBemPTGI7JZDDYuIxJSlBCJOkyTKT3o0QA */
  createMachine({
  context: { posts: [] },
  tsTypes: {} as import('./post-machine.typegen').Typegen0,
  schema: {
    context: {} as { posts: PostItem[] },
    events: {} as
      | {
          type: 'done.invoke.postMachine.FetchingPosts.FetchingTistories.Fetching:invocation[0]';
          data: PostItem[];
        }
      | {
          type: 'done.invoke.postMachine.FetchingPosts.FetchingMD.Fetching:invocation[0]';
          data: PostItem[];
        }
      | {
          type: 'FETCH';
        },
  },
  initial: 'FetchingPosts',
  id: 'postMachine',
  states: {
    FetchingPosts: {
      type: 'parallel',
      states: {
        FetchingTistories: {
          initial: 'Idle',
          states: {
            Fetching: {
              invoke: {
                src: 'fetchTistories',
                onDone: [
                  {
                    actions: 'updatePostsContext',
                    target: 'Done',
                  },
                ],
                onError: [
                  {
                    target: 'Error',
                  },
                ],
              },
            },
            Done: {
              type: 'final',
            },
            Error: {
              type: 'final',
            },
            Idle: {
              on: {
                FETCH: {
                  target: 'Fetching',
                },
              },
            },
          },
        },
        FetchingMD: {
          initial: 'Fetching',
          states: {
            Fetching: {
              invoke: {
                src: 'fetchMD',
                onDone: [
                  {
                    actions: 'updatePostsContext',
                    target: 'Done',
                  },
                ],
                onError: [
                  {
                    target: 'Error',
                  },
                ],
              },
            },
            Done: {
              type: 'final',
            },
            Error: {
              type: 'final',
            },
          },
        },
      },
      onDone: {
        target: 'Done',
      },
    },
    Done: {},
  },
});
