import { getCollection, getServerTime, QuerySnapshot } from '../../lib/firebase';
import { ApiError } from '../../models/errors/ApiError';
import { NestedPartial, TUser, FirestoreUser } from '../../types';
import { voidFunction, toStoreType } from '../../helpers';
import { Logger } from '../../models';

const toUser = (q: QuerySnapshot): TUser[] => q.docs.map((v) => toStoreType<FirestoreUser, TUser>(v.id, v.data()));

const readUser = async (uid: string) => {
  return await getCollection('users')
    .where('uid', '==', uid)
    .orderBy('createdAt')
    .get()
    .then(toUser)
    .catch((err) => new ApiError(err));
};

const createUser = async (uid: string, username: string) => {
  const serverTime = getServerTime();
  const data = { uid, username, createdAt: serverTime, updatedAt: serverTime };
  return getCollection('users')
    .add(data)
    .then((d) => d.id)
    .catch((err) => new ApiError(err));
};

const updateUser = async (id: string, param: NestedPartial<Omit<TUser, 'id'>>) => {
  const updatedAt = getServerTime();
  return getCollection('users')
    .doc(id)
    .update({ ...param, updatedAt })
    .catch((err) => new ApiError(err));
};

const deleteUser = async (id: string) => {
  return getCollection('users')
    .doc(id)
    .delete()
    .catch((err) => new ApiError(err));
};

const onChangedUser = (
  uid: string,
  next: (users: TUser[]) => void,
  error: (err: any) => void,
  completed?: () => void,
) => {
  const query = (q: QuerySnapshot) => next(toUser(q));
  if (uid === '') {
    return voidFunction(() => Logger.log('onChangedUser has no uid'));
  }
  return getCollection('users')
    .where('uid', '==', uid)
    .orderBy('createdAt')
    .onSnapshot(query, error, completed);
};

export const UserService = {
  readUser,
  createUser,
  updateUser,
  deleteUser,
  onChangedUser,
};
