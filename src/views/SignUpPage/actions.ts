import { actionCreatorFactory } from 'typescript-fsa';
import { ActionParameters } from '../../types';
import { signUpPageActions } from '../../store/pages';

const ac = actionCreatorFactory('[views/SignUpPage]');

const actions = {
  signUp: ac<void>('signUp'),
  setFormState: ac<ActionParameters<typeof signUpPageActions.setFormState>>('setFormState'),
  init: ac<void>('init'),
};
export const SignUpPageActions = actions;
