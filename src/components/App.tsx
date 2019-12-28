import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
//
import history from '../helpers/history';
import { configureStore } from '../store';
import { ErrorBoundary } from './others';
import { LoadingSpiner, InfoDialog, OkCancelDialog, YesNoDialog } from '../containers';

import BrowserTab from '../backgrounds/BrowserTab';
import MainTemplate from './templates/MainTemplate/MainTemplate';

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
          </ErrorBoundary>
        </ErrorBoundary>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
