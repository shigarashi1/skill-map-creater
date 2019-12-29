import { combineEpics } from 'redux-observable';
// listeners
import { CommonPageListener } from './CommonPage';
import { SignInPageListener } from './SignInPage';
import { PasswordResetPageListener } from './PasswordResetPage';

// actions
export { CommonPageActions } from './CommonPage';
export { SignInPageActions } from './SignInPage';
export { PasswordResetPageActions } from './PasswordResetPage';

export const eventListenerEpics = combineEpics(CommonPageListener, SignInPageListener, PasswordResetPageListener);
