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
  /** @xstate-layout N4IgpgJg5mDOIC5QAcD2sAuBZAhgYwAsBLAOzADoAxMDQ0qABXQ1iprpKgBUjNUAnInDa1inAMQRUZcqQBuqANYU0mXBwrVR9JplZaO3XhgFD97MVATzUeHBiLSA2gAYAuohToiD6Z5AAHogAzABMAOzkABxR4QAsLuHhAKwAjKnJ8QA0IACeiKFxUeQAnFEAbKklcSWhJfXhoQC+TTmq2PhimhY6zObanDx8gsIGluJg-PwC5MgANvYAZgIAtrPM6l0ihros25ZDJiP9htYkCna+JK4eSCCqPo4k-kEIYZEx8Ykp6ZlxOfk3sFInFwuVyrFkuVquEonEWm0Np1SN0Bow+vt6FgACKYiRSGQ2ZTrNTImRjXp6PFQHHUs4XexPG7+B5XF4FErlcgRTKhYJlSrvAGIZIuErkOKVSrVIouYLBZII+5IjTU3YnSy0ikSSbTfizBYYZb8NbtTYotUY7U03HW+m2RnOdws7xsu6vOpcnmNfkVVJCvIikqRErJUL+jKg-0uKJKs1k1E7PqSaQUTD2FQqrbW9Uu2CPPzuxCNYpROWcuLBGqhGJRYVvJISsHxErBKJ8sHBFqtEAkVAQOB5jqqnNWnqDYymUbjqB5gvPIsIVIuUL10LJYLkcpxIrg8LyqLRxU9+Mjmfq6mHKesbGpudu0CvNLi8obqHB8oK4LgtflUJNjc4nDFwY35OMswtUcqWtK9jnIABRKYBHvJ52QQZ8tzfaFOw3H9AyBVIm0SUMFShb9QnKcDSTPNELxgydjhQwtH2LOt8NSMFyBcDiQJKVJKlSGt9yo4ds3PMc0S1GcmIXFilxXes0jichBLlDcXG3eJhJPCDyXE6CZ1pW8yBktCimU0IKJXKNl0E-58LDf9QxjGo5XKRIKJE809NoiTDFpRC9VMxdzO5KzCnCdJuMKRS+NKSUKOXdsIkEryE0tAzJOxYK5NhetKy5atK2-cI+NfNKaKTPQcsCEV7MBZdNxcUF23lWpwvhHTqK2YywBq144RcFTK0PRo0neNjAWBQjQRcssovKWEKq6fqQhcetgiGxIKmBP82o4oDuyaIA */
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
        },
  },
  initial: 'FetchingPosts',
  id: 'postMachine',
  states: {
    FetchingPosts: {
      type: 'parallel',
      states: {
        FetchingTistories: {
          initial: 'Fetching',
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
