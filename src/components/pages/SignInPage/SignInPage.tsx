import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './SignInPage.module.scss';

type TProps = {};

const SignInPage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <Typography variant="h4" color="inherit">
        SignInPage
      </Typography>
    </div>
  );
};

export default SignInPage;
