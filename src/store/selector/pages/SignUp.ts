import { createSelector } from 'reselect';

import { AppState } from '../..';
import { signUpPageReducers } from '../../pages/SignUpPage';

const featureSelector = (state: AppState): ReturnType<typeof signUpPageReducers> => state.pages.signUp;

export const SignUpPageSelector = {
  stateAll: createSelector(featureSelector, (state) => state),
  email: createSelector(featureSelector, (state) => state.email),
  password: createSelector(featureSelector, (state) => state.password),
};
