import { ServerTimestamp } from '../lib/firebase';
import { TUser } from '.';

export type TFirestoreBase = {
  createdUser: string;
  createdAt: ServerTimestamp;
  updatedUser: string;
  updatedAt: ServerTimestamp;
};

export type Firestore<T> = Omit<T, 'id'> & TFirestoreBase;

export type FirestoreUser = Firestore<TUser>;
