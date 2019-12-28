import React from 'react';

import styles from './SignUpPage.module.scss';
import PageTitle from '../../../containers/components/PageTitle';

type TProps = {};

const SignUpPage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <PageTitle />
    </div>
  );
};

export default SignUpPage;
