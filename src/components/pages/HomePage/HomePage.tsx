import React from 'react';

import styles from './HomePage.module.scss';
import PageTitle from '../../../containers/components/PageTitle';

type TProps = {};

const HomePage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <PageTitle />
    </div>
  );
};

export default HomePage;
