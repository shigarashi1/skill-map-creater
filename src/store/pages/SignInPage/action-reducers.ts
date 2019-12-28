import { actionCreatorFactory } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

// types
type TPageState = {
  email: string;
  password: string;
};

// actions
const ac = actionCreatorFactory('[store/pages/SignIn]');
const actions = {
  init: ac<void>('init'),
  setFormState: ac<{ key: keyof TPageState; value: string }>('setFormState'),
};
export const signInPageActions = actions;

// reducers
const initialState: TPageState = {
  email: '',
  password: '',
};

const reducers = reducerWithInitialState(initialState)
  .case(actions.init, (state, payload) => ({ ...initialState }))
  .case(actions.setFormState, (state, { key, value }) => ({ ...state, [key]: value }));
export const signInPageReducers = reducers;
