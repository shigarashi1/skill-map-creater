import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
//
import history from '../helpers/history';
import { configureStore } from '../store';
import { ErrorBoundary } from './others';
import { LoadingSpiner, InfoDialog } from '../containers';
import { BrowserTab } from '../backgrounds';

import MainTemplate from './templates/MainTemplate/MainTemplate';

const store = configureStore({});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <LoadingSpiner>
          <MainTemplate />
        </LoadingSpiner>
        <ErrorBoundary>
          <BrowserTab />
          <InfoDialog />
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};

export default App;
