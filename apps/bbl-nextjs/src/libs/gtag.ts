import { isBrowser } from '@bbl-nx/utils';

export const pageview = (url: string) => {
  if (!isBrowser) {
    return;
  }
  (window as any).dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
