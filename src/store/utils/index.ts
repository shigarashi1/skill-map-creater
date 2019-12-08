import { combineReducers } from 'redux';
import { dialogReducers } from './dialogs';
import { loadingReducers } from './loading';
import { sidebarReducers } from './sidebar';

export { infoDialogActions, okCancelDialogActions, yesNoDialogActions, clearDialogEpics } from './dialogs';
export { loadingActions } from './loading';
export { sidebarActions } from './sidebar';

export const utilsReducers = combineReducers({
  dialog: dialogReducers,
  loading: loadingReducers,
  sidebar: sidebarReducers,
});
