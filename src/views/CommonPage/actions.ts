import { actionCreatorFactory } from 'typescript-fsa';
import { EPath, ActionParameters } from '../../types';
import { infoDialogActions, yesNoDialogActions, okCancelDialogActions } from '../../store/utils';

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
  // snackbar

  // error

  // router
  router: {
    push: ac<EPath>('router-push'),
    replace: ac<EPath>('router-replace'),
  },
};
