import { actionCreatorFactory } from 'typescript-fsa';
import { EPath } from '../../types';

// actions
const ac = actionCreatorFactory('[store/router]');
const actions = {
  push: ac<EPath>('push'),
  replace: ac<EPath>('replace'),
};
export const routerActions = actions;
