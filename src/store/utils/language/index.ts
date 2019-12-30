import { actionCreatorFactory, Action, AnyAction } from 'typescript-fsa';
import { Epic, combineEpics } from 'redux-observable';
import { ofAction } from 'typescript-fsa-redux-observable-of-action';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tap, ignoreElements, map } from 'rxjs/operators';
import partial from 'ramda/es/partial';

import { AppState } from '../../../store';
import { TLangCode, ELangCode } from '../../../types';
import { LocalStorageService } from '../../../services/local-storage';

// actions
const ac = actionCreatorFactory('[store/utils/language]');
const actions = {
  change: ac<TLangCode>('change'),
};
export const languageActions = actions;

type TState = {
  langCode: TLangCode;
};
const initialState: TState = {
  langCode: ELangCode.jp,
};
const reducers = reducerWithInitialState(initialState) //
  .case(actions.change, (state, payload) => ({ ...state, langCode: payload }));
export const languageReducers = reducers;

// epics
const changeLangCode: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(actions.change),
    map(({ payload }) => payload),
    tap(partial(LocalStorageService.update, ['langCode'])),
    ignoreElements(),
  );
export const languageEpics = combineEpics(changeLangCode);
