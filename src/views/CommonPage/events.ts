import { Epic, combineEpics } from 'redux-observable';
import { AnyAction, Action } from 'typescript-fsa';
import { ofAction } from 'typescript-fsa-redux-observable-of-action';
import { mergeMap, map } from 'rxjs/operators';

import { AppState } from '../../store';
import { CommonPageActions } from '.';
import { infoDialogActions, yesNoDialogActions, okCancelDialogActions, sidebarActions } from '../../store/utils';
import { TInfoDialog, TYesNoDialog, TOkCancelDialog } from '../../types';

const signOut: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.auth.signOut),
    mergeMap(({ payload }) => []),
  );

const showSidebar: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.sidebar.show),
    map(({ payload }) => sidebarActions.show()),
  );

const closeSidebar: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.sidebar.close),
    map(({ payload }) => sidebarActions.close()),
  );

const showInfoDialog: Epic<AnyAction, Action<TInfoDialog>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.infoDialog.show),
    map(({ payload }) => infoDialogActions.show(payload)),
  );

const closeInfoDialog: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.infoDialog.close),
    map(({ payload }) => infoDialogActions.close()),
  );

const showYesNoDialog: Epic<AnyAction, Action<TYesNoDialog>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.yesNoDialog.show),
    map(({ payload }) => yesNoDialogActions.show(payload)),
  );

const closeYesNoDialog: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.yesNoDialog.close),
    map(({ payload }) => yesNoDialogActions.close()),
  );

const showOkCancelDialog: Epic<AnyAction, Action<TOkCancelDialog>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.okCancelDialog.show),
    map(({ payload }) => okCancelDialogActions.show(payload)),
  );

const closeOkCancelDialog: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.okCancelDialog.close),
    map(({ payload }) => okCancelDialogActions.close()),
  );

export const CommonPageListener = combineEpics(
  signOut,
  showSidebar,
  closeSidebar,
  showInfoDialog,
  closeInfoDialog,
  showYesNoDialog,
  closeYesNoDialog,
  showOkCancelDialog,
  closeOkCancelDialog,
);
