import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { SnackbarProvider } from 'notistack';
//
import history from '../helpers/history';
import { configureStore } from '../store';
import { ModalContextProvider } from './hoc/ModalProvider';

import ErrorBoundary from './others/ErrorBoundary/ErrorBoundary';
import BrowserTab from '../backgrounds/BrowserTab';
import MainTemplate from './templates/MainTemplate/MainTemplate';
import LoadingSpiner from '../containers/components/LoadingSpiner';
import InfoDialog from '../containers/components/dialogs/InfoDialog';
import OkCancelDialog from '../containers/components/dialogs/OkCancelDialog';
import YesNoDialog from '../containers/components/dialogs/YesNoDialog';
import SettingRestore from '../backgrounds/SettingRestore';
import Notifier from '../backgrounds/Notifier';

const store = configureStore({});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <SnackbarProvider maxSnack={5} preventDuplicate={false}>
          <ErrorBoundary>
            <LoadingSpiner>
              <ModalContextProvider>
                <MainTemplate />
              </ModalContextProvider>
            </LoadingSpiner>
            <ErrorBoundary>
              <BrowserTab />
              <InfoDialog />
              <OkCancelDialog />
              <YesNoDialog />
              <SettingRestore />
              <Notifier />
            </ErrorBoundary>
          </ErrorBoundary>
        </SnackbarProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
