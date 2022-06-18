import { createMachine, assign } from 'xstate';

export interface PostItem {
  createdAt: string;
  id: string;
  title: string;
  url: string;
  published: boolean;
  isExternal: boolean;
}

export const postMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAcD2sAuBZAhgYwAsBLAOzADoAxMDQ0qABXQ1iprpKgBUjNUAnInHIBJEkQxEcAGwDEAVQYARAIJcAoohToJRVCS0gAHogBMARgDM5AKwB2ACyXzATheXT7gAx2ANCABPRGcXchcADnCbB3MLcy8HcMsAX2T-NExcDgpqWmJOJkxWXI5uXgwBIVYxXRlZdQAlBoB5BsMM3X1DEwRTe3IYy3CHFwcnBy9zADZ-IN6bKfJzOxcpuy8XOynXF1T05iz8nPZ8xmZik-oePkE4BWU1TSQQDsku556bG3Clqb-Hf6WMbhWaIczhUzkOwWdY+AHhKY2Ux7F4HfBHNh5eiFFiY0pYJR406yCD6CikABuqAA1hQMth0aRjliCucifQCezOAhKag8Dg3iQANpeAC67R0gu6wS8XnIG1MDj6lkmELsIMCiBsG3IKvCdkc0yclhNKPphyZXLORStnJKxLA-H4AnIyGkAoAZgIALautHZK04i4sqB2y7c3n8wUi8XPV56AwfGVyhVKmwq8GmdWghA2TZQuyxIamLwLCE2M3+jH27HnElk8iYAV0quWmusooS2CdROgHrhZbkbYueITLwIqYWHOWA3yqLGsaWb4qhypNIgEioCBwLsMgPt624g-XCq3VhKMldnvShBOUImpWL8IuLMjmzTkZLPqThwGqYuWVdnXc1GTIQM2WPcpKmEdQnQEK8pSTW8YiWJxvgNFxognPxNV6T8pnCSYs3MJUElMBFK0yUDmVKIMrRPaDqnESQZAQhMbzscgSwiNxRiBUthgcHNTAI8hn2iLwVRHSJkWA1swIPOjIJuKo2PePtEAAWmmKEAPiWUFjzGIFhzfM7EsbZnzcb5NmhSi92rcND2DfFCQPNTe2MMEvFMHMbCsMI7GibVplicwvnsi0FKcpSnM5C8yA8m8RkhADvBfdVokSPzTEhQjFW8aZ7ArOSqP3GKILiwlYOdfgkqQlKwg2KSs3nbLcLzcwC2mRxf0SHjIuo8CbQPAl6o0hBs1wpxFg8E0rAmKZx0mKZBvKkMg3GryEE0iZdMmWVS0RUZwpmXDFShbVoRfGcpjGPM1oxBKwC2npVi6sZYm4xE1nBadzKHdNHHMizQceplXq0u79v0o6jOmHNdp+UwgXM8KSyWqJZNSIA */
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
          type: 'UPDATE';
          data: PostItem[];
        }
        | {
          type: 'ERROR';
        },
    },
    initial: 'FetchingPosts',
    id: 'postMachine',
    states: {
      FetchingPosts: {
        type: 'parallel',
        states: {
          FetchingTistories: {
            initial: 'Initial',
            states: {
              Done: {
                type: 'final',
              },
              Error: {
                type: 'final',
              },
              Initial: {
                on: {
                  UPDATE: {
                    actions: 'updatePostsContext',
                    target: 'Done',
                  },
                  ERROR: {
                    target: 'Error',
                  },
                },
              },
            },
            on: {
              UPDATE: {
                actions: 'updatePostsContext',
                target: '.Done',
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
  }, {
    actions: {
      updatePostsContext: assign((ctx, event) => {
        return {
          posts: [...ctx.posts, ...event.data],
        };
      }),
    },
  });
