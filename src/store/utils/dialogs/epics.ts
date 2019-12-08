import { combineEpics, Epic } from 'redux-observable';
import { ofAction } from 'typescript-fsa-redux-observable-of-action';
import { map, delay } from 'rxjs/operators';
import { AnyAction, Action } from 'typescript-fsa';
import { AppState } from '../..';
import { infoDialogActions, okCancelDialogActions, yesNoDialogActions } from '.';

// epics
const clearInfoDialog: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(infoDialogActions.close),
    delay(50),
    map(({ payload }) => infoDialogActions.clear()),
  );

const clearOkCancelDialog: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(okCancelDialogActions.close),
    delay(50),
    map(({ payload }) => okCancelDialogActions.clear()),
  );

const clearYesNoDialog: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(yesNoDialogActions.close),
    delay(50),
    map(({ payload }) => yesNoDialogActions.clear()),
  );

export const clearDialogEpics = combineEpics(clearInfoDialog, clearOkCancelDialog, clearYesNoDialog);
