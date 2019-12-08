import { actionCreatorFactory } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { TInfoDialog } from '../../../../types';

// actions
const ac = actionCreatorFactory('[store/utils/dialogs/info]');
const actions = {
  show: ac<TInfoDialog>('set'),
  close: ac<void>('close'),
  clear: ac<void>('clear'),
};
export const infoDialogActions = actions;

// reducers
const initialState: TInfoDialog = {
  hasOpen: false,
  title: '情報',
  context: '',
  lists: [],
  ok: undefined,
  close: () => console.log('close void'),
};
const reducers = reducerWithInitialState(initialState)
  .case(actions.show, (state, payload) => ({ ...state, ...payload }))
  .case(actions.close, (state, payload) => ({ ...state, hasOpen: false }))
  .case(actions.clear, (state, payload) => ({ ...initialState }));
export const infoDialogReducers = reducers;
