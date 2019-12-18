import { actionCreatorFactory } from 'typescript-fsa';
import { TInfoDialog, TYesNoDialog, TOkCancelDialog, EPath } from '../../types';

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
    show: ac<TInfoDialog>('showInfoDialog'),
    close: ac<void>('closeInfoDialog'),
  },
  // yes-no
  yesNoDialog: {
    show: ac<TYesNoDialog>('showYesNoDialog'),
    close: ac<void>('closeYesNoDialog'),
  },
  // ok-cancel
  okCancelDialog: {
    show: ac<TOkCancelDialog>('showOkCancelDialog'),
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
