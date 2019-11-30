import { combineEpics } from 'redux-observable';
import { LoginPageListener } from './LoginPage';

//
export { LoginPageActions } from './LoginPage';

export const eventListenerEpics = combineEpics(LoginPageListener);
