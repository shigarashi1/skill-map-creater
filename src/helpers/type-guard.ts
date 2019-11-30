export const isMatchType = <T>(v: any): v is T => Object.keys({} as T).every((key) => v.hasOwnProperty(key));
