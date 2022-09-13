export type Event =
  | {
      type: 'test';
    }
  | {
      type: 'test1';
      payload: { test: 'test' };
    };

export type SendEvent = <Type extends Event['type']>([
  eventType,
  payload,
]: Extract<Event, { type: Type }> extends {
  payload: infer TPayload extends Record<string, unknown>;
}
  ? [type: Type, payload: TPayload]
  : [type: Type, payload: undefined]) => void;

export function firebaseAnalyticsFactory(methods: {
  logEvent: SendEvent;
  setUserId: (userId: string) => void;
  setCurrentScreen: (screenName: string) => void;
}) {
  const { logEvent, setUserId, setCurrentScreen } = methods;
  const firebaseLogEvent: SendEvent = (args) => {
    logEvent(args);
  };
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
