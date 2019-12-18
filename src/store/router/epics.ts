import { AnyAction } from 'typescript-fsa';
import { Epic, combineEpics } from 'redux-observable';
import { ofAction } from 'typescript-fsa-redux-observable-of-action';
import { push, replace, CallHistoryMethodAction } from 'connected-react-router';
import { map, tap } from 'rxjs/operators';
import { AppState } from '../../store';
import { routerActions } from './actions';
import { EPath } from '../../types';
import { partial } from 'ramda';

const outputLog = (action: string, path: EPath): void => {
  console.log(`${action} path => ${path}`);
};

// epics
const pushPath: Epic<AnyAction, CallHistoryMethodAction, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(routerActions.push),
    map(({ payload }) => payload),
    tap(partial(outputLog, ['push'])),
    map((path) => push(path)),
  );

const replacePath: Epic<AnyAction, CallHistoryMethodAction, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(routerActions.replace),
    map(({ payload }) => payload),
    tap(partial(outputLog, ['replace'])),
    map((path) => replace(path)),
  );

export const routerEpics = combineEpics(pushPath, replacePath);
