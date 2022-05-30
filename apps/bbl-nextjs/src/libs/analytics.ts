import _ from 'lodash';

import { firebaseInstance } from './firebase';
import { createInjectDecorator } from '@bbl-nx/decorators';
import { Event, SendEvent, firebaseAnalyticsFactory } from "@bbl-nx/libs";


export const firebaseAnalytics = _.once(() => {
  const logEvent: SendEvent = ([type, payload]) => {
    const instance = firebaseInstance();
    if (!instance) {
      return;
    }
    instance.analytics().logEvent<Event["type"]>(type, payload as any);
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
  return firebaseAnalyticsFactory({
    logEvent, setUserId, setCurrentScreen
  });
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
