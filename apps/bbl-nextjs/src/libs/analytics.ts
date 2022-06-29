import _ from 'lodash';

import { firebaseInstance } from './firebase';
import { Event, SendEvent, firebaseAnalyticsFactory } from "@bbl-nx/libs";


export const firebaseAnalytics = _.once(() => {
  const logEvent: SendEvent = ([type, payload]) => {
    const instance = firebaseInstance();
    if (!instance) {
      return;
    }
    instance.analytics().logEvent<Event["type"]>(type, payload);
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
