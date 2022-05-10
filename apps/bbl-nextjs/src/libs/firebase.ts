import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/remote-config';
import _ from 'lodash';

import env from '@bbl-nextjs/libs/env';

export const firebaseInstance = _.once(() => {
  if (!env.FIREBASE_CONFIG) {
    throw new Error('not exists firebase configs');
  }
  const firebaseConfig = env.FIREBASE_CONFIG;
  return firebase.initializeApp(firebaseConfig);
});
