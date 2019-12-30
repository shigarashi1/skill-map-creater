import { actionCreatorFactory } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

// types
type TPageState = {
  username: string;
  email: string;
  password: string;
  confirmation: string;
};

// actions
const ac = actionCreatorFactory('[store/pages/SignUp]');
const actions = {
  init: ac<void>('init'),
  setFormState: ac<{ key: keyof TPageState; value: string }>('setFormState'),
};
export const signUpPageActions = actions;

// reducers
const initialState: TPageState = {
  username: '',
  email: '',
  password: '',
  confirmation: '',
};

const reducers = reducerWithInitialState(initialState)
  .case(actions.init, (state, payload) => ({ ...initialState }))
  .case(actions.setFormState, (state, { key, value }) => ({ ...state, [key]: value }));
export const signUpPageReducers = reducers;
