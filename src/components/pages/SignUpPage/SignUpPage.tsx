import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './SignUpPage.module.scss';

type TProps = {};

const SignUpPage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <Typography variant="h4" color="inherit">
        SignUpPage
      </Typography>
    </div>
  );
};

export default SignUpPage;
