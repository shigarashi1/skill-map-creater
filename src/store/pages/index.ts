import { combineReducers } from 'redux';
import { signInPageReducers } from './SignInPage';

export { signInPageActions } from './SignInPage';

export const pageReducers = combineReducers({
  signIn: signInPageReducers,
});
