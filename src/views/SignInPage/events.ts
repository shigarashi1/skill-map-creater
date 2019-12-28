import { Action, AnyAction } from 'typescript-fsa';
import { Epic, combineEpics } from 'redux-observable';
import { ofAction } from 'typescript-fsa-redux-observable-of-action';
import { mergeMap, map } from 'rxjs/operators';
import { AppState } from '../../store';
import { SignInPageActions } from './actions';
import { WrapAction } from '../../types';
import { signInPageActions } from '../../store/pages';

// epics
const signIn: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(SignInPageActions.signIn),
    map(({ payload }) => payload),
    mergeMap((action) => []),
  );

const setFormState: Epic<AnyAction, WrapAction<typeof signInPageActions.setFormState>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(SignInPageActions.setFormState),
    map(({ payload }) => signInPageActions.setFormState(payload)),
  );

const init: Epic<AnyAction, WrapAction<typeof signInPageActions.init>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(SignInPageActions.init),
    map(({ payload }) => signInPageActions.init()),
  );

export const SignInPageListener = combineEpics(signIn, setFormState, init);
