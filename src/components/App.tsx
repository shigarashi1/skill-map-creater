import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
//
import history from '../helpers/history';
import { configureStore } from '../store';

import ErrorBoundary from './others/ErrorBoundary/ErrorBoundary';
import BrowserTab from '../backgrounds/BrowserTab';
import MainTemplate from './templates/MainTemplate/MainTemplate';
import LoadingSpiner from '../containers/components/LoadingSpiner';
import InfoDialog from '../containers/components/dialogs/InfoDialog';
import OkCancelDialog from '../containers/components/dialogs/OkCancelDialog';
import YesNoDialog from '../containers/components/dialogs/YesNoDialog';
import SettingRestore from '../backgrounds/SettingRestore';

const store = configureStore({});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <LoadingSpiner>
            <MainTemplate />
          </LoadingSpiner>
          <ErrorBoundary>
            <BrowserTab />
            <InfoDialog />
            <OkCancelDialog />
            <YesNoDialog />
            <SettingRestore />
          </ErrorBoundary>
        </ErrorBoundary>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
