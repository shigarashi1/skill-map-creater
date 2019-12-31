import React from 'react';
import Button from '@material-ui/core/Button';

import { AppState } from '../store';
import { Dispatch } from 'redux';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withSnackbar, WithSnackbarProps } from 'notistack';

import { UtilsSelector } from '../store/selector';
import { mapDispatchToCommonProps } from '../containers/common';
import { getAutoHideDuration } from '../helpers/view/notification';

const mapStateToProps = (state: AppState) => {
  return {
    notifications: UtilsSelector.notification.notifications(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { notification } = mapDispatchToCommonProps(dispatch);
  return {
    ...notification,
  };
};

type TProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & WithSnackbarProps;

const Notifier: React.FC<TProps> = ({
  notifications,
  dismissNotification,
  removeNotification,
  closeSnackbar,
  enqueueSnackbar,
}) => {
  const [displayedKeys, setDisplayedKeys] = useState<string[]>([]);

  useEffect(() => {
    const addDisplayed = (v: string) => setDisplayedKeys([...displayedKeys, v]);
    const dismiss = (v: string) => () => dismissNotification(v);
    notifications.forEach(({ message, options = {}, hasDismissed = false }) => {
      const key = String(options.key);
      if (hasDismissed) {
        closeSnackbar(key);
        return;
      }

      // Do nothing if snackbar is already displayed
      if (displayedKeys.includes(key)) {
        return;
      }

      // Keep track of snackbars that we've displayed
      addDisplayed(key);

      // Display snackbar using notistack
      enqueueSnackbar(message, {
        ...options,
        autoHideDuration: getAutoHideDuration(options.variant),
        onClose: (event: React.SyntheticEvent<any>, reason: string) => {
          if (options.onClose) {
            options.onClose(event, reason);
          }
        },
        onExit: (handler: any) => {
          removeNotification(key);
        },
        action: (v: string) => <Button onClick={dismiss(key)}>OK</Button>,
      });
    });
  }, [
    closeSnackbar,
    enqueueSnackbar,
    removeNotification,
    dismissNotification,
    notifications,
    setDisplayedKeys,
    displayedKeys,
  ]);

  return null;
};

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps)(Notifier));
