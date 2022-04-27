import MobileDetect from "mobile-detect";

export const isBrowser = typeof window !== "undefined";

export const isMobile = () => {
  if (!isBrowser) {
    return false;
  }
  const md = new MobileDetect(window.navigator.userAgent);
  return !!md.mobile();
};

export const isIE = () => {
  if (!isBrowser) {
    return false;
  }
  const md = new MobileDetect(window.navigator.userAgent);
  return !!md.version("IE");
};
