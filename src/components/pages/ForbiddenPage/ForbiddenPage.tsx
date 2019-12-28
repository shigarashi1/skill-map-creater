import React from 'react';

import styles from './ForbiddenPage.module.scss';
import PageTitle from '../../../containers/components/PageTitle';

type TProps = {};

const ForbiddenPage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <PageTitle />
    </div>
  );
};

export default ForbiddenPage;
