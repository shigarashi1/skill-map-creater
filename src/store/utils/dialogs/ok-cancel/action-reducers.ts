import { actionCreatorFactory } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { TOkCancelDialog } from '../../../../types';

// actions
const ac = actionCreatorFactory('[store/utils/dialogs/ok-cancel]');
const actions = {
  show: ac<Omit<TOkCancelDialog, 'hasOpen'>>('show'),
  close: ac<void>('close'),
  clear: ac<void>('clear'),
};
export const okCancelDialogActions = actions;

// reducers
const initialState: TOkCancelDialog = {
  hasOpen: false,
  title: '確認',
  context: '',
  ok: () => console.log('ok'),
  cancel: () => console.log('cancel'),
  close: () => console.log('close'),
};
const reducers = reducerWithInitialState(initialState)
  .case(actions.show, (state, payload) => ({ ...state, hasOpen: true, ...payload }))
  .case(actions.close, (state, payload) => ({ ...state, hasOpen: false }))
  .case(actions.clear, (state, payload) => ({ ...initialState }));
export const okCancelDialogReducers = reducers;
