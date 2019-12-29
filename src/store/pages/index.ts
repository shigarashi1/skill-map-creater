import { combineReducers } from 'redux';
// reducer
import { signInPageReducers } from './SignInPage';
import { passwordResetPageReducers } from './PasswordResetPage';

// action
export { signInPageActions } from './SignInPage';
export { passwordResetPageActions } from './PasswordResetPage';

// combine
export const pageReducers = combineReducers({
  signIn: signInPageReducers,
  passwordReset: passwordResetPageReducers,
});
