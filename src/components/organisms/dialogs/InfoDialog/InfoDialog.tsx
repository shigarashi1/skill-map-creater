import React from 'react';
import Button from '@material-ui/core/Button';

import styles from './InformationDialog.module.scss';

import BaseDialog from '../BaseDialog/BaseDialog';
import Typography from '@material-ui/core/Typography';

type TProps = {
  hasOpen: boolean;
  title: string;
  context?: string;
  lists?: string[];
  close: () => void;
};

const InformationDialog: React.FC<TProps> = ({ hasOpen, title, context, close }) => {
  const onClose = () => {
    close();
  };

  const buttonChildren = (
    <div className={styles.btnWrapper}>
      <Button onClick={onClose}>Close</Button>
    </div>
  );

  return (
    <div id={styles.container}>
      <BaseDialog hasOpen={hasOpen} onClose={onClose} buttonChildren={buttonChildren} title={title}>
        <React.Fragment>
          {context ? (
            <Typography variant="h6" gutterBottom={true}>
              {context}
            </Typography>
          ) : null}
        </React.Fragment>
      </BaseDialog>
    </div>
  );
};

export default InformationDialog;
