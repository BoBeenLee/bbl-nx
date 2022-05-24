import { createMachine, assign } from 'xstate';

export const postMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAcD2sAuBZAhgYwAsBLAOzADoAFdDAAkAcJwGLXzAHpcBKhwAsXAazoeadsCIkwGIIqMuVIA3VAGsKaTLkKkK1TL1aceTcvwEIpqPDgxExAbQAMAXUQp0RU2LsgAHogDMAJgDs5ABz+PgAslj4+AKwAjFERIQA0IACeiF7B-uQAnP4AbFGZwZlemSU+XgC+5YkK2PjE4mp0OuzcGnpCYABOnaid5MgANiYAZr0Atv00SvWqNBot2nyMggYk0sZOJFa2SCAKjmYkLu4I3n6BIWGRMXHBiSmnHn7BPjk5QRE5BT7+wZXVUzqKiocx0WAAIm1lsJROJDHJJoogQ1QcwIVCVoYNodti59ptjqlMjlyL44l4PNk8md7ogIpZMuRgnk8gV0pYPB4Iv89oDlCj1GDITp2l0en1BiNxojavzZoK0cKlpi1kYTDibHiHATdidiiSyWVKbkojTknTMn5MhEvKbYi9TZZ-DyatNgY1eCIxBRMCZ5HyZiCFVrYAdnLrEGUMv4OcTgh5Cl5Av5aadwkzXiFMh5-BTXh5KlUQCRUBA4CHZYGPc0tBiBCGw0cIwgopYvKmvBEPOQcsF0m8fJz-I7uUXXcj5U1mAsMYARMcAMx0NnWgE7RRk5LufS05LkeN4dnJeDNd4K2yxOykugPu1GaVoi5aAE6HABTLS8OhIQa57m6++a7+-NR4ogzMJrS5T49y8HIryROUgynO9FjfcMV0jFNAKiSIskyJ1mR+V4Ii7GDKxvBVyHRB9BGQptUJbNtU2iYJyCiLwOS7SxexCQdiLdAUEIo5UF2oj90iYrwoLbB1WxYu5AJtI9rVwnC9zCKCeIneCNAE3Qn1fXZ8XfZtRNJCS0h8GJLBkhjMmAgpDzyJ1xPMiox2vPitKVYTmx+VN4xJZlD0koJvCCaDXNgqtUS82iIlkh5WwU61T2yKDFNi9S4OrZYhP07VDNo35LGY+NhzKaIznQh4nmAl5cJjCych+DKZmitxPEsVMPCK89zxeMlTzKMJC3KIA */
  createMachine({
  context: { posts: [] },
  tsTypes: {} as import('./post-machine.typegen').Typegen0,
  initial: 'Post 조회',
  id: 'postMachine',
  states: {
    'Post 조회': {
      type: 'parallel',
      states: {
        '티스토리 조회': {
          initial: '조회 중',
          states: {
            '조회 중': {
              invoke: {
                src: '티스토리 조회',
                onDone: [
                  {
                    actions: 'Post 리스트 업데이트',
                    target: '조회 완료',
                  },
                ],
                onError: [
                  {
                    target: '조회 실패',
                  },
                ],
              },
            },
            '조회 완료': {
              type: 'final',
            },
            '조회 실패': {
              type: 'final',
            },
          },
        },
        'MD 조회': {
          initial: '조회 중',
          states: {
            '조회 중': {
              invoke: {
                src: 'MD 호출',
                onDone: [
                  {
                    actions: 'Post 리스트 업데이트',
                    target: '조회 완료',
                  },
                ],
                onError: [
                  {
                    target: '조회 실패',
                  },
                ],
              },
            },
            '조회 완료': {
              type: 'final',
            },
            '조회 실패': {
              type: 'final',
            },
          },
        },
      },
      onDone: {
        target: 'Post 조회 완료',
      },
    },
    'Post 조회 완료': {},
  },
});
