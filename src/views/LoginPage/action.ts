import { actionCreatorFactory } from 'typescript-fsa';

const ac = actionCreatorFactory('[views/LoginPage]');

const actions = {
  signIn: ac<void>('signIn'),
  signUp: ac<void>('signUp'),
  changeValue: ac<void>('changeValue'),
  clear: ac<void>('clear'),
};
export const LoginPageActions = actions;
