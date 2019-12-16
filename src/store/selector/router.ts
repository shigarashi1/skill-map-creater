import { createSelector } from 'reselect';
import { getLocation } from 'connected-react-router';

import { AppState } from '..';

const appStateSelector = (state: AppState): AppState => state;

export const RouterSelector = {
  currentPath: createSelector(appStateSelector, (state) => getLocation(state).pathname),
};
