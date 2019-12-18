import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './NotFoundPage.module.scss';

type TProps = {};

const NotFoundPage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <Typography variant="h4" color="inherit">
        NotFoundPage
      </Typography>
    </div>
  );
};

export default NotFoundPage;
