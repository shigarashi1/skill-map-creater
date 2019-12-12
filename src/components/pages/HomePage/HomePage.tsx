import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './HomePage.module.scss';

type TProps = {};

const HomePage: React.FC<TProps> = () => {
  return (
    <div className={styles.root}>
      <Typography variant="h4" color="inherit">
        HomePage
      </Typography>
    </div>
  );
};

export default HomePage;
