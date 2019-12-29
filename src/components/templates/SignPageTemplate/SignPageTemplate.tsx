import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import styles from './SignPageTemplate.module.scss';

type TProps = {
  title: React.ReactNode;
  actions: React.ReactNode;
  extra?: React.ReactNode;
};

const SignPageTemplate: React.FC<TProps> = ({ title, children, actions, extra }) => {
  return (
    <div id={styles.root}>
      <Grid className={styles.grid} container={true} spacing={2} alignContent="center" justify="center">
        <Grid item={true}>
          <Card className={styles.card}>
            <CardHeader className={styles.header} title={title} />
            <CardContent className={styles.card}>{children}</CardContent>
            <CardActions className={styles.action}>{actions}</CardActions>
          </Card>
        </Grid>
      </Grid>
      {extra ? <div className={styles.extra}>{extra}</div> : null}
    </div>
  );
};

export default SignPageTemplate;
