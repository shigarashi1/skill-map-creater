import { AnyAction } from 'typescript-fsa';
import { Epic, combineEpics } from 'redux-observable';
import { ofAction } from 'typescript-fsa-redux-observable-of-action';
import { map } from 'rxjs/operators';
import { AppState } from '../../store';
import { SignInPageActions } from './actions';
import { WrapAction } from '../../types';
import { signInPageActions } from '../../store/pages';
import { authActions } from '../../store/auth';

// epics
const signIn: Epic<AnyAction, WrapAction<typeof authActions.signIn>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(SignInPageActions.signIn),
    map(({ payload }) => payload),
    // TODO: 仮
    map((payload) =>
      authActions.signIn({ uid: '', emailVerified: false, email: '', isAnonymous: false, photoURL: null }),
    ),
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
