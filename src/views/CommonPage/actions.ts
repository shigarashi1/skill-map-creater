import { actionCreatorFactory } from 'typescript-fsa';
import { EPath, ActionParameters, TNotification } from '../../types';
import {
  infoDialogActions,
  yesNoDialogActions,
  okCancelDialogActions,
  languageActions,
  notificationActions,
} from '../../store/utils';

// actions
const ac = actionCreatorFactory('[views/CommonPage]');

// ===== common page =====
export const CommonPageActions = {
  // auth
  auth: {
    signOut: ac<void>('signOut'),
  },
  // sidebar
  sidebar: {
    show: ac<void>('showSidebar'),
    close: ac<void>('closeSidebar'),
  },
  // info
  infoDialog: {
    show: ac<ActionParameters<typeof infoDialogActions.show>>('showInfoDialog'),
    close: ac<void>('closeInfoDialog'),
  },
  // yes-no
  yesNoDialog: {
    show: ac<ActionParameters<typeof yesNoDialogActions.show>>('showYesNoDialog'),
    close: ac<void>('closeYesNoDialog'),
  },
  // ok-cancel
  okCancelDialog: {
    show: ac<ActionParameters<typeof okCancelDialogActions.show>>('showOkCancelDialog'),
    close: ac<void>('closeOkCancelDialog'),
  },
  // language
  language: {
    change: ac<ActionParameters<typeof languageActions.change>>('changeLanguage'),
  },
  // snackbar
  notification: {
    enqueueNotification: ac<TNotification>('enqueueNotification'),
    dismissNotification: ac<ActionParameters<typeof notificationActions.dismiss>>('dismissNotification'),
    dismissAllNotification: ac<ActionParameters<typeof notificationActions.dismissAll>>('dismissAllNotification'),
    removeNotification: ac<ActionParameters<typeof notificationActions.remove>>('removeNotification'),
  },
  // error

  // router
  router: {
    push: ac<EPath>('router-push'),
    replace: ac<EPath>('router-replace'),
  },
};
