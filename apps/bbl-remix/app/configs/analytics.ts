import _ from "lodash";

import { firebaseInstance } from './firebase';
import { createInjectDecorator } from '@bbl-nx/decorators';
import { traverseObjectKeys, traverseObjectSliceStr } from '@bbl-nx/utils';

const EVENT_TYPE_MAX_LENGTH = 40;

export type EventType = "test";

export interface EventResult {
  eventType: EventType;
  [key: string]: any;
}

function firebaseAnalyticsFactory(
  funcAnalytics: (eventName: string, params: Record<string, any>) => void,
  setUserId: (userId: string) => void,
  setCurrentScreen: (screenName: string) => void
) {
  function firebaseLogEvent(eventData: EventResult) {
    const { eventType } = eventData;

    if (!eventType) {
      throw new Error("eventType is not provided!");
    }

    if (eventType.length > EVENT_TYPE_MAX_LENGTH) {
      throw new Error(
        `${eventType} has over ${EVENT_TYPE_MAX_LENGTH} characters!`
      );
    }

    const isAllKeysUnderLength40 = traverseObjectKeys(
      _.omit(eventData, ["eventType"]),
      (key: string) => key.length <= EVENT_TYPE_MAX_LENGTH
    );

    if (!isAllKeysUnderLength40) {
      return;
    }

    const parameters = traverseObjectSliceStr(
      _.omit(eventData, ["eventType"]),
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
        eventType: "test",
      });
    },
  };
}

export const firebaseAnalytics = _.once(() => {
  const logEvent = (eventName: string, params: Record<string, any>) => {
    const instance = firebaseInstance();
    if (!instance) {
      return;
    }
    instance.analytics().logEvent(eventName, params);
  };
  const setUserId = (userId: string) => {
    const instance = firebaseInstance();
    if (!instance) {
      return;
    }
    instance.analytics().setUserId(userId);
  };
  const setCurrentScreen = (screenName: string) => {
    const instance = firebaseInstance();
    if (!instance) {
      return;
    }
    instance.analytics().setCurrentScreen(screenName);
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
