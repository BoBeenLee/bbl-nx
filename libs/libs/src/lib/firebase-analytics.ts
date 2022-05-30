import { createInjectDecorator } from '@bbl-nx/decorators';
import { traverseObjectKeys, traverseObjectSliceStr } from '@bbl-nx/utils';

const EVENT_TYPE_MAX_LENGTH = 40;

export type Event = {
  type: "test";
} | {
  type: "test1";
  data: { test: "test" }
};

export type SendEvent = <Type extends Event["type"]>([eventType, payload]: Extract<Event, { type: Type }> extends { payload: infer TPayload } ? [type: Type, payload: TPayload] : [type: Type]) => void;


export function firebaseAnalyticsFactory(
  methods: {
    logEvent: SendEvent;
    setUserId: (userId: string) => void;
    setCurrentScreen: (screenName: string) => void;
  }
) {
  const { logEvent, setUserId, setCurrentScreen } = methods;
  const firebaseLogEvent: SendEvent = (args) => {
    logEvent(args);

    // const isAllKeysUnderLength40 = traverseObjectKeys(
    //   payload as any,
    //   (key: string) => key.length <= EVENT_TYPE_MAX_LENGTH
    // );

    // if (!isAllKeysUnderLength40) {
    //   return;
    // }

    // const parameters = traverseObjectSliceStr(
    //   payload as any,
    //   100
    // );
  }
  return {
    setUserId: (userId: string) => {
      setUserId(userId);
    },
    setCurrentScreen: (screenName: string) => {
      setCurrentScreen(screenName);
    },
    logEvent: firebaseLogEvent,
  };
}