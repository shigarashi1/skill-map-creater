import { TBase } from '.';

export type TUser = TBase & {
  uid: string;
  username: string;
  roll?: string;
};
