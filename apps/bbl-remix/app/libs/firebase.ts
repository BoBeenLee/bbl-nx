import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/remote-config';

import env from './env';
import { once } from "@bbl-nx/utils";

export const firebaseInstance = once(() => {
  if (typeof document === 'undefined') {
    return;
  }
  if (!Boolean(env.FIREBASE_CONFIG)) {
    throw new Error('not exists firebase configs');
  }
  const firebaseConfig = env.FIREBASE_CONFIG;
  return firebase.initializeApp(firebaseConfig);
});
