import { AnyAction, Action } from 'typescript-fsa';
import { Epic, combineEpics } from 'redux-observable';
import { ofAction } from 'typescript-fsa-redux-observable-of-action';
import { map, mergeMap } from 'rxjs/operators';
import { AppState } from '../../store';
import { PasswordResetPageActions } from './actions';
import { WrapAction } from '../../types';
import { passwordResetPageActions } from '../../store/pages';

// epics
const setFormState: Epic<AnyAction, WrapAction<typeof passwordResetPageActions.setFormState>, AppState> = (
  action$,
  store,
) =>
  action$.pipe(
    ofAction(PasswordResetPageActions.setFormState),
    map(({ payload }) => passwordResetPageActions.setFormState(payload)),
  );

const init: Epic<AnyAction, WrapAction<typeof passwordResetPageActions.init>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(PasswordResetPageActions.init),
    map(({ payload }) => passwordResetPageActions.init()),
  );

const resetPassword: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(PasswordResetPageActions.resetPassword),
    mergeMap(({ payload }) => []),
  );

export const PasswordResetPageListener = combineEpics(setFormState, init, resetPassword);
