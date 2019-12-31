import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import * as serviceWorker from './serviceWorker';
import 'react-app-polyfill/ie11';

import './styles/main.scss';
import App from './components/App';
import ErrorBoundary from './components/others/ErrorBoundary/ErrorBoundary';

import config from './configuration/config';

Sentry.init(config.sentry);

ReactDOM.render(
  <ErrorBoundary isRoot={true}>
    <App />
  </ErrorBoundary>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
