import React from 'react';
import { Provider } from 'react-redux';
//
import { configureStore } from '../store';
import { ErrorBoundary } from './others';
import { LoadingSpiner } from '../containers';
import { BrowserTab } from '../backgrounds';

const store = configureStore({});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">a</div>
      <ErrorBoundary>
        <BrowserTab />
        <LoadingSpiner />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
