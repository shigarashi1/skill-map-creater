import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './LoginPage.module.scss';

type TProps = {};

const LoginPage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <Typography variant="h4" color="inherit">
        LoginPage
      </Typography>
    </div>
  );
};

export default LoginPage;
