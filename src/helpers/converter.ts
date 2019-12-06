import { TFirestoreBase, TBase } from '../types';
import { omit } from 'ramda';

export const toStoreType = <T extends TFirestoreBase, K extends TBase>(
  id: string,
  data: any,
  keys: Array<keyof T> = ['createdAt', 'updatedAt', 'createdUser', 'updatedUser'],
): K => ({ id, ...omit(keys as string[], data) } as K);
