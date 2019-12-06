import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { combineReducers, compose, applyMiddleware, StoreCreator, createStore, AnyAction } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
//
import history from '../helpers/history';
import { sampleReducers, sampleEpics } from './__sample';
import { rootActions } from './actions';

import { eventListenerEpics } from '../views';
import { middlewareEpics } from '../middlewares';

// reducer
export const reducers = combineReducers({
  router: connectRouter(history),
  // utility: utilityReducers,
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
const rootEpic = combineEpics(sampleEpics, eventListenerEpics, middlewareEpics);
const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, AppState>();

// enhance
const enhancers = compose(
  applyMiddleware(epicMiddleware, routerMiddleware(history)),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : (f: StoreCreator) => f,
);

export const configureStore = (initialState: any) => {
  const store = createStore(rootReducer, initialState, enhancers);
  epicMiddleware.run(rootEpic);
  return store;
};
