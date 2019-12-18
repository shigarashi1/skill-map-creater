import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './ForbiddenPage.module.scss';

type TProps = {};

const ForbiddenPage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <Typography variant="h4" color="inherit">
        ForbiddenPage
      </Typography>
    </div>
  );
};

export default ForbiddenPage;
