import { TAuthorization, NestedPartial } from '../../types';

export const canShowSidebarItem = (
  userAuthorization: TAuthorization,
  itemAuthorization?: NestedPartial<TAuthorization>,
): boolean => {
  if (!itemAuthorization) {
    return true;
  }
  const definedKeyValueObj = Object.entries(itemAuthorization)
    .filter(([_k, v]) => typeof v !== 'undefined')
    .reduce((pre, [k, v]) => ({ ...pre, [k]: !!v }), {} as TAuthorization);

  return Object.keys(definedKeyValueObj)
    .map((k) => k as keyof TAuthorization)
    .every((k) => userAuthorization[k] === definedKeyValueObj[k]);
};
