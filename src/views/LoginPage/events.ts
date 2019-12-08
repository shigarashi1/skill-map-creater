import { Action, AnyAction } from 'typescript-fsa';
import { Epic, combineEpics } from 'redux-observable';
import { ofAction } from 'typescript-fsa-redux-observable-of-action';
import { mergeMap, map } from 'rxjs/operators';
import { AppState } from '../../store';
import { LoginPageActions } from './actions';

// epics
const signIn: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(LoginPageActions.signIn),
    map(({ payload }) => payload),
    mergeMap((action) => []),
  );

const signUp: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(LoginPageActions.signUp),
    map(({ payload }) => payload),
    mergeMap((action) => []),
  );

const changeValue: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(LoginPageActions.changeValue),
    map(({ payload }) => payload),
    mergeMap((action) => []),
  );

const clear: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(LoginPageActions.clear),
    map(({ payload }) => payload),
    mergeMap((action) => []),
  );

export const LoginPageListener = combineEpics(signIn, signUp, changeValue, clear);
