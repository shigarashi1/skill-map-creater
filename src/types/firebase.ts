import { ServerTimestamp } from '../lib/firebase';

export type TFirestoreBase = {
  createdAt: ServerTimestamp;
  updatedAt: ServerTimestamp;
};

export type Firestore<T> = Omit<T, 'id'> & TFirestoreBase;
