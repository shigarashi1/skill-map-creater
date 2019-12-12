import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './ManualPage.module.scss';

type TProps = {};

const ManualPage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <Typography variant="h4" color="inherit">
        ManualPage
      </Typography>
    </div>
  );
};

export default ManualPage;
