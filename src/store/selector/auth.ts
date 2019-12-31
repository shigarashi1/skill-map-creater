import { createSelector } from 'reselect';

import { AppState } from '..';
import { authReducers } from '../auth';

const featureSelector = (state: AppState): ReturnType<typeof authReducers> => state.auth;

export const AuthSelector = {
  isLoggedIn: createSelector(featureSelector, (state) => state.isLoggedIn),
  isLoggedInByLink: createSelector(featureSelector, (state) => state.isLoggedInByLink),
  firebaseUser: createSelector(featureSelector, (state) => state.firebaseUser),
};
