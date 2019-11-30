import config from '../../configuration/config';
import { auth, TFirebaseUser, Persistence } from '../../lib/firebase';
import { Nullable } from '../../types';
import { ApiError } from '../../models/errors/ApiError';
import { voidFunction } from '../../helpers';

const PersistenceType = config.isDev ? Persistence.SESSION : Persistence.NONE;

const signIn = async (email: string, password: string) => {
  return await auth
    .setPersistence(PersistenceType)
    .then(() => auth.signInWithEmailAndPassword(email, password).catch((err) => new ApiError(err)))
    .catch((err) => new ApiError(err));
};

const signUp = async (email: string, password: string) => {
  return await auth.createUserWithEmailAndPassword(email, password).catch((err) => new ApiError(err));
};

const signOut = async () => {
  return await auth.signOut().catch((err) => new ApiError(err));
};

const onAuthStateChanged = (
  next: (user: Nullable<TFirebaseUser>) => void,
  error: (err: any) => void,
  completed?: () => void,
) => {
  const subscription = auth.onAuthStateChanged(
    (user) => voidFunction(next, user),
    (err) => voidFunction(error, err),
  );
  return subscription;
};

const getAuthState = async () => {
  return await new Promise<Nullable<TFirebaseUser>>((resolve, reject) => {
    auth.onAuthStateChanged(
      (user) => voidFunction(resolve, user),
      (err) => voidFunction(reject, new ApiError(err)),
    );
  });
};

export const AuthenticationService = {
  signIn,
  signUp,
  signOut,
  onAuthStateChanged,
  getAuthState,
};
