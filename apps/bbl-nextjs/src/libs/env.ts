interface Environment {
  production: EnvironmentEntry;
  staging: EnvironmentEntry;
}

interface EnvironmentEntry {
  FIREBASE_CONFIG?: any;
  GTM_ID: string;
}

const ENV_TYPE: keyof Environment = 'production';
const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID ?? '';

export const envByType: Environment = {
  production: {
    FIREBASE_CONFIG: {
      apiKey: 'AIzaSyDdFJKoVQTL_EgUcy0BOQFaVGEk1fktPrU',
      authDomain: 'myspace-c3805.firebaseapp.com',
      databaseURL: 'https://myspace-c3805.firebaseio.com',
      projectId: 'myspace-c3805',
      storageBucket: 'myspace-c3805.appspot.com',
      messagingSenderId: '757274443049',
      appId: '1:757274443049:web:cea92b2efec4f7f685cb38',
      measurementId: 'G-Q9PE71EK7F',
    },
    GTM_ID,
  },
  staging: {
    FIREBASE_CONFIG: {
      apiKey: 'AIzaSyDdFJKoVQTL_EgUcy0BOQFaVGEk1fktPrU',
      authDomain: 'myspace-c3805.firebaseapp.com',
      databaseURL: 'https://myspace-c3805.firebaseio.com',
      projectId: 'myspace-c3805',
      storageBucket: 'myspace-c3805.appspot.com',
      messagingSenderId: '757274443049',
      appId: '1:757274443049:web:cea92b2efec4f7f685cb38',
      measurementId: 'G-Q9PE71EK7F',
    },
    GTM_ID,
  },
};

export const isProduction = () => ENV_TYPE === 'production';
export const env = envByType[ENV_TYPE];