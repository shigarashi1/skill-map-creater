import { combineEpics } from 'redux-observable';
// listeners
import { CommonPageListener } from './CommonPage';
import { SignInPageListener } from './SignInPage';
import { SignUpPageListener } from './SignUpPage';
import { PasswordResetPageListener } from './PasswordResetPage';

// actions
export { CommonPageActions } from './CommonPage';
export { SignInPageActions } from './SignInPage';
export { SignUpPageActions } from './SignUpPage';
export { PasswordResetPageActions } from './PasswordResetPage';

export const eventListenerEpics = combineEpics(
  CommonPageListener,
  SignInPageListener,
  SignUpPageListener,
  PasswordResetPageListener,
);
