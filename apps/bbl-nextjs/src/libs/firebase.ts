import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/remote-config';
import _ from 'lodash';
import { Event, SendEvent, firebaseAnalyticsFactory } from '@bbl-nx/libs';

import { env } from '../libs/env';

export const firebaseInstance = _.once(() => {
  if (!env.FIREBASE_CONFIG) {
    throw new Error('not exists firebase configs');
  }
  const firebaseConfig = env.FIREBASE_CONFIG;
  return firebase.initializeApp(firebaseConfig);
});

export const firebaseAnalytics = _.once(() => {
  const logEvent: SendEvent = ([type, payload]) => {
    const instance = firebaseInstance();
    if (!instance) {
      return;
    }
    instance.analytics().logEvent<Event['type']>(type, payload);
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
    logEvent,
    setUserId,
    setCurrentScreen,
  });
});
