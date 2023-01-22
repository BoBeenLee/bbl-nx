import MobileDetect from 'mobile-detect';

export const isBrowser = typeof window !== 'undefined';

export const getHostname = () => {
  if (typeof window !== 'undefined') {
    return `https://${window.location.hostname}`;
  }
  return ``;
};

export const isMobile = () => {
  if (!isBrowser) {
    return false;
  }
  const md = new MobileDetect(window.navigator.userAgent);
  return !!md.mobile();
};

export const isSafari = () => {
  if (!isBrowser) {
    return false;
  }
  const md = new MobileDetect(window.navigator.userAgent);
  return md.userAgent() === 'Safari';
};

export const isIE = () => {
  if (!isBrowser) {
    return false;
  }
  const md = new MobileDetect(window.navigator.userAgent);
  return !!md.version('IE');
};
