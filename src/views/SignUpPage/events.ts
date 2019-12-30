import { Action, AnyAction } from 'typescript-fsa';
import { Epic, combineEpics } from 'redux-observable';
import { ofAction } from 'typescript-fsa-redux-observable-of-action';
import { mergeMap, map } from 'rxjs/operators';
import { AppState } from '../../store';
import { SignUpPageActions } from './actions';
import { WrapAction } from '../../types';
import { signUpPageActions } from '../../store/pages';

// epics
const signUp: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(SignUpPageActions.signUp),
    map(({ payload }) => payload),
    mergeMap((action) => []),
  );

const setFormState: Epic<AnyAction, WrapAction<typeof signUpPageActions.setFormState>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(SignUpPageActions.setFormState),
    map(({ payload }) => signUpPageActions.setFormState(payload)),
  );

const init: Epic<AnyAction, WrapAction<typeof signUpPageActions.init>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(SignUpPageActions.init),
    map(({ payload }) => signUpPageActions.init()),
  );

export const SignUpPageListener = combineEpics(signUp, setFormState, init);
