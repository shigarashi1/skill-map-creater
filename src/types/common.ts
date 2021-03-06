export type IndexesObject<T = any> = { [key: string]: T };
export type Nullable<T> = T | null;
export type NestedPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer R> ? Array<NestedPartial<R>> : NestedPartial<T[K]>;
};
