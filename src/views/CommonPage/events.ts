import { Epic, combineEpics } from 'redux-observable';
import { AnyAction, Action } from 'typescript-fsa';
import { ofAction } from 'typescript-fsa-redux-observable-of-action';
import { mergeMap } from 'rxjs/operators';

import { AppState } from '../../store';
import { CommonPageActions } from '.';

const signOut: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.auth.signOut),
    mergeMap(({ payload }) => []),
  );

const showSidebar: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.sidebar.show),
    mergeMap(({ payload }) => []),
  );

const closeSidebar: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.sidebar.close),
    mergeMap(({ payload }) => []),
  );

const showInfoDialog: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.infoDialog.show),
    mergeMap(({ payload }) => []),
  );

const closeInfoDialog: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.infoDialog.close),
    mergeMap(({ payload }) => []),
  );

const showYesNoDialog: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.yesNoDialog.show),
    mergeMap(({ payload }) => []),
  );

const closeYesNoDialog: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.yesNoDialog.close),
    mergeMap(({ payload }) => []),
  );

const showOkCancelDialog: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.okCancelDialog.show),
    mergeMap(({ payload }) => []),
  );

const closeOkCancelDialog: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(CommonPageActions.okCancelDialog.close),
    mergeMap(({ payload }) => []),
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
