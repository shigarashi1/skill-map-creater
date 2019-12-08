import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actionCreatorFactory } from 'typescript-fsa';

// actions
const ac = actionCreatorFactory('[store/utils/loading]');
const actions = {
  start: ac<void>('start'),
  end: ac<void>('end'),
};
export const loadingActions = actions;

const initialState: boolean = false;
const reducers = reducerWithInitialState(initialState)
  .case(actions.start, (state, payload) => true)
  .case(actions.end, (state, payload) => false);
export const loadingReducers = reducers;
