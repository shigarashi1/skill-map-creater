export const matchConditionsAll = <T1, T2 = undefined>(
  conditions: Array<[T1, boolean]>,
  defaultValue: T1 | T2,
): Array<T1 | T2> => {
  const matches = conditions.filter(([value, isValid]) => !!isValid).map(([value, isValid]) => value);
  return matches.length > 0 ? matches : [defaultValue];
};

export const matchCondition = <T1, T2 = undefined>(
  conditions: Array<[T1, boolean]>,
  defaultValue: T1 | T2,
): T1 | T2 => {
  return matchConditionsAll(conditions, defaultValue)[0];
};

export const by = <T = any>(key: keyof T) => (v: any) => (value: T): boolean =>
  typeof v !== 'object' && value[key] === v;
