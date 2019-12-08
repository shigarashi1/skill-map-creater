import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actionCreatorFactory } from 'typescript-fsa';

// actions
const ac = actionCreatorFactory('[store/utils/sidebar]');
const actions = {
  show: ac<void>('show'),
  close: ac<void>('close'),
};
export const sidebarActions = actions;

const initialState: boolean = false;
const reducers = reducerWithInitialState(initialState)
  .case(actions.show, (state, payload) => true)
  .case(actions.close, (state, payload) => false);
export const sidebarReducers = reducers;
