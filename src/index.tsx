import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import * as serviceWorker from './serviceWorker';

import './styles/main.scss';
import App from './components/App';

import config from './configuration/config';

import { ErrorBoundary } from './components/others';

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
