import _ from 'lodash';

import { firebaseInstance } from 'src/configs/firebase';
import { createInjectDecorator } from 'src/decorators/createInjectDecorator';
import { traverseObjectKeys, traverseObjectSliceStr } from 'src/utils/string';

const EVENT_TYPE_MAX_LENGTH = 40;

export type EventType = 'test';

export interface IEventResult {
  eventType: EventType;
  [key: string]: any;
}

function firebaseAnalyticsFactory(
  funcAnalytics: (eventName: string, params: Record<string, any>) => void,
  setUserId: (userId: string) => void,
  setCurrentScreen: (screenName: string) => void
) {
  function firebaseLogEvent(eventData: IEventResult) {
    const { eventType } = eventData;

    if (!eventType) {
      throw new Error('eventType is not provided!');
    }

    if (eventType.length > EVENT_TYPE_MAX_LENGTH) {
      throw new Error(
        `${eventType} has over ${EVENT_TYPE_MAX_LENGTH} characters!`
      );
    }

    const isAllKeysUnderLength40 = traverseObjectKeys(
      _.omit(eventData, ['eventType']),
      (key: string) => key.length <= EVENT_TYPE_MAX_LENGTH
    );

    if (!isAllKeysUnderLength40) {
      return;
    }

    const parameters = traverseObjectSliceStr(
      _.omit(eventData, ['eventType']),
      100
    );
    funcAnalytics(eventData.eventType, parameters);
  }
  return {
    setUserId: (userId: string) => {
      setUserId(userId);
    },
    setCurrentScreen: (screenName: string) => {
      setCurrentScreen(screenName);
    },
    test: () => {
      firebaseLogEvent({
        eventType: 'test',
      });
    },
  };
}

export const firebaseAnalytics = _.once(() => {
  const logEvent = (eventName: string, params: Record<string, any>) => {
    firebaseInstance().analytics().logEvent(eventName, params);
  };
  const setUserId = (userId: string) => {
    firebaseInstance().analytics().setUserId(userId);
  };
  const setCurrentScreen = (screenName: string) => {
    firebaseInstance().analytics().setCurrentScreen(screenName);
  };
  return firebaseAnalyticsFactory(logEvent, setUserId, setCurrentScreen);
});

export function firebaseTracking<IProps, IStates>(
  trackingConsumer: (
    props: IProps,
    state: IStates,
    event: typeof firebaseAnalytics,
    args: any[]
  ) => void
): any {
  const func = async (props: IProps, state: IStates, args: any[]) => {
    trackingConsumer(props, state, firebaseAnalytics, args);
  };
  return createInjectDecorator(func);
}
