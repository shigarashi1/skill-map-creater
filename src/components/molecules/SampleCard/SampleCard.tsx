import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import styles from './SampleCard.module.scss';

type TProps = {
  title?: string;
  contexts: string;
  action?: () => void;
  node?: React.ReactNode;
};

const SampleCard: React.FC<TProps> = ({ title, contexts, action, node }) => {
  return (
    <Card id={styles.container} square={true}>
      {title ? <CardHeader title={title} /> : null}
      <CardContent>{node ? node : null}</CardContent>
      <CardContent>
        <Typography variant="body2">{contexts}</Typography>
      </CardContent>
      {action ? (
        <CardActions>
          <Button onClick={action}>Try</Button>
        </CardActions>
      ) : null}
    </Card>
  );
};

export default SampleCard;
