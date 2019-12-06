import { Action, AnyAction } from 'typescript-fsa';
import { Epic, combineEpics } from 'redux-observable';
import { ofAction } from 'typescript-fsa-redux-observable-of-action';
import { mergeMap, map } from 'rxjs/operators';
import { AppState } from '../../store';
import { middlewareUserActions } from '.';

// epics
const createUser: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(middlewareUserActions.create.started),
    map(({ payload }) => payload),
    mergeMap((action) => []),
  );

const readUsers: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(middlewareUserActions.read.started),
    map(({ payload }) => payload),
    mergeMap((action) => []),
  );

const updateUser: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(middlewareUserActions.update.started),
    map(({ payload }) => payload),
    mergeMap((action) => []),
  );

const deleteUser: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(middlewareUserActions.delete.started),
    map(({ payload }) => payload),
    mergeMap((action) => []),
  );

export const middlewareUserEpics = combineEpics(createUser, readUsers, updateUser, deleteUser);
