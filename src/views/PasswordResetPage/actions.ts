import { actionCreatorFactory } from 'typescript-fsa';
import { ActionParameters } from '../../types';
import { passwordResetPageActions } from '../../store/pages';

const ac = actionCreatorFactory('[views/PasswordResetPage]');

const actions = {
  resetPassword: ac<void>('resetPassword'),
  setFormState: ac<ActionParameters<typeof passwordResetPageActions.setFormState>>('setValue'),
  init: ac<void>('init'),
};
export const PasswordResetPageActions = actions;
