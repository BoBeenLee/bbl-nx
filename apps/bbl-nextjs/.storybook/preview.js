import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12
import '../src/styles/styles.css';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
