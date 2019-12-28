import React from 'react';

import styles from './SignInPage.module.scss';
import PageTitle from '../../../containers/components/PageTitle';

type TProps = {};

const SignInPage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <PageTitle />
    </div>
  );
};

export default SignInPage;
