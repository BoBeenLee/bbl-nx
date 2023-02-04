import { isBrowser } from '@bbl-nx/utils';
import { NextWebVitalsMetric } from "next/app";

const hasGTag = () => {
  return Boolean((window as any).gtag)
}

export const pageview = (url: string) => {
  if (!isBrowser) {
    return;
  }
  (window as any).dataLayer.push({
    event: 'pageview',
    page: url,
  });
};

export const sendToGTagWebVitals = (params: {
  category: NextWebVitalsMetric['label'];
  name: NextWebVitalsMetric['name'];
  delta: number;
  id: string;
}) => {
  if (!isBrowser || !hasGTag()) {
    return;
  }
  const {
    category,
    name,
    delta,
    id,
  } = params;
  // Assumes the global `gtag()` function exists, see:
  // https://developers.google.com/analytics/devguides/collection/gtagjs
  (window as any).gtag('event', name, {
    event_category: category === 'custom' ? `Next.js-custom` : category,
    // The `id` value will be unique to the current page load. When sending
    // multiple values from the same page (e.g. for CLS), Google Analytics can
    // compute a total by grouping on this ID (note: requires `eventLabel` to
    // be a dimension in your report).
    event_label: id,
    // Google Analytics metrics must be integers, so the value is rounded.
    // For CLS the value is first multiplied by 1000 for greater precision
    // (note: increase the multiplier for greater precision if needed).
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    // Use a non-interaction event to avoid affecting bounce rate.
    non_interaction: true,

    // OPTIONAL: any additional attribution params here.
    // See: https://web.dev/debug-performance-in-the-field/
    // dimension1: '...',
    // dimension2: '...',
    // ...
  });
};
