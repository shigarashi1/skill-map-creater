import { combineEpics } from 'redux-observable';
// listeners
import { LoginPageListener } from './LoginPage';
import { CommonPageListener } from './CommonPage';
import { SignInPageListener } from './SignInPage';

// actions
export { LoginPageActions } from './LoginPage';
export { CommonPageActions } from './CommonPage';
export { SignInPageActions } from './SignInPage';

export const eventListenerEpics = combineEpics(LoginPageListener, CommonPageListener, SignInPageListener);
