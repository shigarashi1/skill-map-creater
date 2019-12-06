import { Action, AnyAction } from 'typescript-fsa';
import { Epic, combineEpics } from 'redux-observable';
import { ofAction } from 'typescript-fsa-redux-observable-of-action';
import { mergeMap, map } from 'rxjs/operators';
import { AppState } from '../../store';
import { middlewareAuthActions } from '.';

// epics
const signIn: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(middlewareAuthActions.signIn.started),
    map(({ payload }) => payload),
    mergeMap((action) => []),
  );

const signUp: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(middlewareAuthActions.signUp.started),
    map(({ payload }) => payload),
    mergeMap((action) => []),
  );

const signOut: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(middlewareAuthActions.signOut.started),
    map(({ payload }) => payload),
    mergeMap((action) => []),
  );

export const middlewareAuthEpics = combineEpics(signIn, signUp, signOut);
