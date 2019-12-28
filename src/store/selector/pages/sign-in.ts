import { createSelector } from 'reselect';

import { AppState } from '../..';
import { signInPageReducers } from '../../pages/SignInPage';

const featureSelector = (state: AppState): ReturnType<typeof signInPageReducers> => state.pages.signIn;

export const SignInPageSelector = {
  stateAll: createSelector(featureSelector, (state) => state),
  email: createSelector(featureSelector, (state) => state.email),
  password: createSelector(featureSelector, (state) => state.password),
};
