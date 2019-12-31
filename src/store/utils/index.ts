import { combineReducers } from 'redux';
import { dialogReducers } from './dialogs';
import { loadingReducers } from './loading';
import { sidebarReducers } from './sidebar';
import { languageReducers } from './language';
import { notificationReducers } from './notification';

export { infoDialogActions, okCancelDialogActions, yesNoDialogActions, clearDialogEpics } from './dialogs';
export { loadingActions } from './loading';
export { sidebarActions } from './sidebar';
export { languageActions, languageEpics } from './language';
export { notificationActions } from './notification';

export const utilsReducers = combineReducers({
  dialog: dialogReducers,
  loading: loadingReducers,
  sidebar: sidebarReducers,
  language: languageReducers,
  notification: notificationReducers,
});
