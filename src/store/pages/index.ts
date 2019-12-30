import { combineReducers } from 'redux';
// reducer
import { signInPageReducers } from './SignInPage';
import { signUpPageReducers } from './SignUpPage';
import { passwordResetPageReducers } from './PasswordResetPage';

// action
export { signInPageActions } from './SignInPage';
export { signUpPageActions } from './SignUpPage';
export { passwordResetPageActions } from './PasswordResetPage';

// combine
export const pageReducers = combineReducers({
  signIn: signInPageReducers,
  signUp: signUpPageReducers,
  passwordReset: passwordResetPageReducers,
});
