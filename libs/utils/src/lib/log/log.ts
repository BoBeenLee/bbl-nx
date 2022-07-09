const metricsClient = {
  increment: (key: string) => console.log(`metric: ${key}`),
};

export function metric<Fn extends AnyFunction>(fn: Fn, metricName: string) {
  return function (...args: Parameters<Fn>): ReturnType<Fn> {
    metricsClient.increment(metricName);
    return fn(...args);
  };
}

export const labelMetricFn = (label: string) => (fn: AnyFunction) =>
  metric(fn, `${label}:${fn.name}`);

export const deprecatedLog = labelMetricFn('deprecated');
