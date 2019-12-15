import React from 'react';

import styles from './MainTemplate.module.scss';

import { ErrorBoundary } from '../../others';

import AppRouter from '../../../routers/AppRouter';
import Header from '../../../containers/components/Header';
import Sidebar from '../../../containers/components/Sidebar';

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
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>
    </div>
  );
};

export default MainTemplate;
