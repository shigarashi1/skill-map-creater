import { createSelector } from 'reselect';

import { AppState } from '..';
import { utilsReducers } from '../utils';
import { TLangCode } from '../../types';

const featureSelector = (state: AppState): ReturnType<typeof utilsReducers> => state.utils;

export const UtilsSelector = {
  dialogs: {
    info: createSelector(featureSelector, (state) => state.dialog.info),
    okCancel: createSelector(featureSelector, (state) => state.dialog.okCancel),
    yesNo: createSelector(featureSelector, (state) => state.dialog.yesNo),
  },
  loading: {
    isLoading: createSelector(featureSelector, (state) => state.loading),
  },
  sidebar: {
    hasOpened: createSelector(featureSelector, (state) => state.sidebar),
  },
  language: {
    langCode: createSelector(featureSelector, (state) => state.language.langCode as TLangCode),
  },
  notification: {
    notifications: createSelector(featureSelector, (state) => state.notification.notifications),
  },
};
