import { actionCreatorFactory } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { TNotification } from '../../../types';

// actions
const ac = actionCreatorFactory('[store/utils/notification]');
const actions = {
  enqueue: ac<TNotification>('enqueue'),
  dismiss: ac<string>('dismiss'),
  dismissAll: ac<void>('dismissAll'),
  remove: ac<string>('remove'),
};
export const notificationActions = actions;

// reducers
type TState = {
  notifications: TNotification[];
};

const initialState: TState = {
  notifications: [],
};

const reducers = reducerWithInitialState(initialState)
  .case(actions.enqueue, (state, payload) => ({
    ...state,
    notifications: [...state.notifications, payload],
  }))
  .case(actions.dismiss, (state, payload) => ({
    ...state,
    notifications: state.notifications.map((v) => (v.options.key !== payload ? v : { ...v, hasDismissed: true })),
  }))
  .case(actions.dismissAll, (state, payload) => ({
    ...state,
    notifications: state.notifications.map((v) => ({ ...v, hasDismissed: true })),
  }))
  .case(actions.remove, (state, payload) => ({
    ...state,
    notifications: state.notifications.filter((notification) => notification.options.key !== payload),
  }));
export const notificationReducers = reducers;
