import { combineEpics } from 'redux-observable';
// listeners
import { LoginPageListener } from './LoginPage';
import { CommonPageListener } from './CommonPage';

// actions
export { LoginPageActions } from './LoginPage';
export { CommonPageActions } from './CommonPage';

export const eventListenerEpics = combineEpics(LoginPageListener, CommonPageListener);
