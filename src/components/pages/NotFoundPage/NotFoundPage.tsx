import React from 'react';

import styles from './NotFoundPage.module.scss';
import PageTitle from '../../../containers/components/PageTitle';

type TProps = {};

const NotFoundPage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <PageTitle />
    </div>
  );
};

export default NotFoundPage;
