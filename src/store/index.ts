import { combineEpics, createEpicMiddleware } from 'redux-observable';
import {
  combineReducers,
  compose,
  applyMiddleware,
  StoreCreator,
  createStore,
  AnyAction,
  Dispatch,
  MiddlewareAPI,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSentryMiddleware from 'redux-sentry-middleware';
import * as Sentry from '@sentry/browser';
//
import history from '../helpers/history';
import { sampleReducers, sampleEpics } from './__sample';
import { rootActions } from './actions';

// reducers
import { utilsReducers, clearDialogEpics } from './utils';

// epics
import { eventListenerEpics } from '../views';
import { middlewareEpics } from '../middlewares';
import { Logger } from '../models';

// reducer
export const reducers = combineReducers({
  router: connectRouter(history),
  utils: utilsReducers,
  // auth: authReducers,
  // user: userReducers,
  // category: categoryReducers,
  // target: targetReducers,
  // record: recordReducers,
  // error: errorReducers,
  // pages: pageReducer,
  // sample is not used
  sample: sampleReducers,
});
export type AppState = ReturnType<typeof reducers>;

const rootReducer = (state: any, action: any) => {
  if (action.type === rootActions.clearAllState.type) {
    state = undefined;
  }
  return reducers(state, action);
};

// epic
const rootEpic = combineEpics(sampleEpics, eventListenerEpics, middlewareEpics, clearDialogEpics);
const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, AppState>();
const crashSentryReporter = (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
  try {
    return next(action); // dispatch
  } catch (err) {
    Logger.error('Redux caught an exception!', err);
    Sentry.withScope((scope) => {
      scope.setExtra('Redux', { action, state: api.getState() });
      Sentry.captureException(err);
    });
    throw err; // re-throw error
  }
};

// enhance
const enhancers = compose(
  applyMiddleware(epicMiddleware, routerMiddleware(history), createSentryMiddleware(Sentry), crashSentryReporter),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : (f: StoreCreator) => f,
);

export const configureStore = (initialState: any) => {
  const store = createStore(rootReducer, initialState, enhancers);
  epicMiddleware.run(rootEpic);
  return store;
};
