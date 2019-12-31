import { actionCreatorFactory } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { TFirebaseUser } from '../../lib/firebase';

// actions
const ac = actionCreatorFactory('[store/auth]');
const actions = {
  init: ac<void>('init'),
  signIn: ac<TFirebaseUser>('signIn'),
  signInByLink: ac<void>('signInByLink'),
};
export const authActions = actions;

// reducers
type TAuthState = {
  isLoggedIn: boolean;
  isLoggedInByLink: boolean;
  firebaseUser?: TFirebaseUser;
};

const initialState: TAuthState = {
  isLoggedIn: false,
  isLoggedInByLink: false,
  firebaseUser: undefined,
};

const reducers = reducerWithInitialState(initialState)
  .case(actions.init, (state, payload) => ({ ...initialState }))
  .case(actions.signIn, (state, payload) => ({ ...state, isLoggedIn: true, firebaseUser: payload }))
  .case(actions.signInByLink, (state, payload) => ({ ...state, isLoggedIn: true, isLoggedInByLink: true }));
export const authReducers = reducers;
