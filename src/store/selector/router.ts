import { createSelector } from 'reselect';
import { RouterState } from 'connected-react-router';

import { AppState } from '..';

const featureSelector = (state: AppState): RouterState => state.router;

export const RouterSelector = {
  currentPath: createSelector(featureSelector, (state) => state.location.pathname),
};
