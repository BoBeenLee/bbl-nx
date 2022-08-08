import { createMachine, assign } from 'xstate';
import { BlogItem } from '../interfaces/blog';

export const blogMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QCMA2B7KBZAhgYwAsBLAOzADoAxMAF0NKgCEMpYrb6SoAVI2G9ACcicdnWJcAxBHRlypAG7oA1hTSZcnCtXENmmNjs48+A4aKMSoCRejw4aRWQG0ADAF1EoAA7pYRR1kvEAAPRABmcIB2cgBOVyiARldwgDYo8IBWTKiAGhAAT0QAJgAWTLjE4qj4gA5i8NcqhIBfFvz1bHwJbQ4rfVYxY15+IRFDPoZJMEFBIXJvVAcAMyEAW3JOzR6h-pYJ3S4Rs3HdhhsSJXtAkjdPJBBffxvgsIRImPiklPSsnPyiu9wqVyNFMsVUq5SolEjVaplSm0OixtqReocmPszlwsAARbFQaSyCi2VSbFHdNEEgYHYx4gkXK4OJy3DzBJ4BFmvCIpcjFTKuVzFCGJSKpWKxAGIAUVcKJTK1BK1VKlWoS2JRJEgLaUuSWPRY-U4-FGwkzOaCBZLGirQQbHVaamGybGhm2a4su7svycoIPN6NcJ8gVCkViiVShCZWJBqJRer81Jy8KKzJah07U00olyfgONQUx1Z-be55c-2IKLVcgwmOQ+LhWLZSWFCJREG1dvRJOZeX8uNtdogEjoCBwYIZqnFgwE45jUS44ml30kblRxvkVIq2INeqxKqZSP82LkUquVICxKlSHpYqxdOFzMuzEz01z8xsACisyEy5eFfXE8t1KHcUzvA9I3CYpalBKJMnFDI41VYU0yHSc9WfGlZ1MedaSsP9y1AN5kmKI8BUqYVhRAsoY07B8NF1dFjCwt8cI-Ai-SIytakjWEg1iaFO1SfkyhSWp6K6ItMOdDF6VNDjVwAkjI17VxQT7RtMmBFNYVSCTUQwjEWOfelFzIBS1xDOIU3iG9Em3Q9WyjRIYMVJtSg80UkkbfTGKdV8TPxb8LQsgCrNo2zz3skDHMBBUYjjZVanhVx6lhYpfKkoyZLpXFQq4hB40jUpIlBDy1SggTwM1NDHynaSDHy0JpVKXimjiKJXFoqphKae9aoYx0zLAJq3lqaFN061Kk2VVLakSSDxVgxtoISfcclcVDkUGnpRp5I8T3VI7jtiZVBxaIA */
  createMachine(
    {
  context: { blogs: [] },
  tsTypes: {} as import('./blog-machine.typegen').Typegen0,
  schema: {
    context: {} as { blogs: BlogItem[] },
    events: {} as
      | {
          type: 'done.invoke.blogMachine.FetchingBlogs.FetchingTistories.Fetching:invocation[0]';
          data: BlogItem[];
        }
      | {
          type: 'done.invoke.blogMachine.FetchingBlogs.FetchingMD.Fetching:invocation[0]';
          data: BlogItem[];
        }
      | {
          type: 'UPDATE';
          data: BlogItem[];
        }
      | {
          type: 'ERROR';
        },
  },
  initial: 'FetchingBlogs',
  id: 'blogMachine',
  states: {
    FetchingBlogs: {
      type: 'parallel',
      states: {
        FetchingTistories: {
          initial: 'Fetching',
          states: {
            Done: {
              type: 'final',
            },
            Error: {
              type: 'final',
            },
            Fetching: {
              invoke: {
                src: 'fetchTistories',
                onDone: [
                  {
                    actions: 'updateBlogsContext',
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
                    actions: 'updateBlogsContext',
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
},
    {
      actions: {
        updateBlogsContext: assign((ctx, event) => {
          return {
            blogs: [...ctx.blogs, ...event.data],
          };
        }),
      },
    }
  );
