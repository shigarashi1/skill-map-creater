import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './TechnologyPage.module.scss';

type TProps = {};

const TechnologyPage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <Typography variant="h4" color="inherit">
        TechnologyPage
      </Typography>
    </div>
  );
};

export default TechnologyPage;
