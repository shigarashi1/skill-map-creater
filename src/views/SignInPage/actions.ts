import { actionCreatorFactory } from 'typescript-fsa';
import { ActionParameters } from '../../types';
import { signInPageActions } from '../../store/pages';

const ac = actionCreatorFactory('[views/SignInPage]');

const actions = {
  signIn: ac<void>('signIn'),
  setFormState: ac<ActionParameters<typeof signInPageActions.setFormState>>('setValue'),
  init: ac<void>('init'),
};
export const SignInPageActions = actions;
