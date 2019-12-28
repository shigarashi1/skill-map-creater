import React from 'react';

import styles from './ManualPage.module.scss';
import PageTitle from '../../../containers/components/PageTitle';

type TProps = {};

const ManualPage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <PageTitle />
    </div>
  );
};

export default ManualPage;
