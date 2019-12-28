import { actionCreatorFactory } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { TYesNoDialog } from '../../../../types';

// actions
const ac = actionCreatorFactory('[store/utils/dialogs/yes-no]');
const actions = {
  show: ac<Omit<TYesNoDialog, 'hasOpen'>>('show'),
  close: ac<void>('close'),
  clear: ac<void>('clear'),
};
export const yesNoDialogActions = actions;

// reducers
const initialState: TYesNoDialog = {
  hasOpen: false,
  title: '選択',
  context: '',
  yes: () => console.log('yes'),
  no: () => console.log('no'),
  close: () => console.log('close'),
};
const reducers = reducerWithInitialState(initialState)
  .case(actions.show, (state, payload) => ({ ...state, hasOpen: true, ...payload }))
  .case(actions.close, (state, payload) => ({ ...state, hasOpen: false }))
  .case(actions.clear, (state, payload) => ({ ...initialState }));
export const yesNoDialogReducers = reducers;
