import React from 'react';

import styles from './SignPageTemplate.module.scss';

import { ErrorBoundary } from '../../others';

const SignPageTemplate: React.FC<{}> = () => {
  return (
    <div id={styles.root}>
      <div className={styles.container}>
        <ErrorBoundary>
          <p>a</p>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default SignPageTemplate;
