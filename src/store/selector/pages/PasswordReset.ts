import { createSelector } from 'reselect';

import { AppState } from '../..';
import { passwordResetPageReducers } from '../../pages/PasswordResetPage';

const featureSelector = (state: AppState): ReturnType<typeof passwordResetPageReducers> => state.pages.signIn;

export const PasswordResetPageSelector = {
  stateAll: createSelector(featureSelector, (state) => state),
};
