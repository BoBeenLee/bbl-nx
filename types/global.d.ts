declare global {
  type ExtractArray<T extends any[]> = T extends (infer K)[] ? K : never;

  type OptionalProps<T> = {
    [key in keyof T as T[key] extends
      | number
      | string
      | Record<string, any>
      | any[]
      ? key
      : never]: T[key];
  } & {
    [key in keyof T as T[key] extends
      | number
      | string
      | Record<string, any>
      | any[]
      ? never
      : key]+?: T[key];
  };

  type MergeArrayType<
    T extends any[],
    K = keyof ExtractArray<T>
  > = OptionalProps<{
    [key in K]: ExtractArray<T>[key];
  }>;

  type Merge<T, U> = OptionalProps<{
    [key in keyof T | keyof U]:
      | (key extends keyof T ? T[key] : never)
      | (key extends keyof U ? U[key] : never);
  }>;

  type IndexOf<T extends unknown[], S extends unknown[] = []> = S["length"] extends T["length"] ? never : S["length"] | IndexOf<T, [...S, unknown]>;
}

export {};
