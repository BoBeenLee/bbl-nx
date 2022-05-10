interface Environment {
  production: EnvironmentEntry;
  staging: EnvironmentEntry;
}

interface EnvironmentEntry {
  FIREBASE_CONFIG?: any;
}

const ENV_TYPE = process.env.REACT_ENV || "staging";

const env: Environment = {
  production: {
    FIREBASE_CONFIG: {
      apiKey: "AIzaSyDdFJKoVQTL_EgUcy0BOQFaVGEk1fktPrU",
      authDomain: "myspace-c3805.firebaseapp.com",
      databaseURL: "https://myspace-c3805.firebaseio.com",
      projectId: "myspace-c3805",
      storageBucket: "myspace-c3805.appspot.com",
      messagingSenderId: "757274443049",
      appId: "1:757274443049:web:cea92b2efec4f7f685cb38",
      measurementId: "G-Q9PE71EK7F"
    }
  },
  staging: {
    FIREBASE_CONFIG: {
      apiKey: "AIzaSyDdFJKoVQTL_EgUcy0BOQFaVGEk1fktPrU",
      authDomain: "myspace-c3805.firebaseapp.com",
      databaseURL: "https://myspace-c3805.firebaseio.com",
      projectId: "myspace-c3805",
      storageBucket: "myspace-c3805.appspot.com",
      messagingSenderId: "757274443049",
      appId: "1:757274443049:web:cea92b2efec4f7f685cb38",
      measurementId: "G-Q9PE71EK7F"
    }
  }
};

export const isProduction = () => ENV_TYPE === "production";

export default env[ENV_TYPE as keyof Environment] || {};
