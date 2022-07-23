
import { firebaseInstance } from './firebase';
import { Event, SendEvent, firebaseAnalyticsFactory } from "@bbl-nx/libs";
import { once } from "@bbl-nx/utils";


export const firebaseAnalytics = once(() => {
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
