import React from 'react';

import styles from './TechnologyPage.module.scss';
import PageTitle from '../../../containers/components/PageTitle';

type TProps = {};

const TechnologyPage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <PageTitle />
    </div>
  );
};

export default TechnologyPage;
