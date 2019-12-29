import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actionCreatorFactory } from 'typescript-fsa';
import { TLangCode, ELangCode } from '../../../types';

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
