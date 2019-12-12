import React from 'react';

import styles from './MainTemplate.module.scss';

import AppRouter from '../../../routers/AppRouter';
import Header from '../../../containers/components/Header';
import { ErrorBoundary } from '../../others';

const MainTemplate: React.FC<{}> = () => {
  return (
    <div id={styles.root}>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <div className={styles.container}>
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default MainTemplate;
