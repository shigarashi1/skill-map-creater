import React from 'react';
import Button from '@material-ui/core/Button';

import styles from './YesNoDialog.module.scss';

import BaseDialog from '../BaseDialog/BaseDialog';
import { TYesNoDialog } from '../../../../types';

const YesNoDialog: React.FC<TYesNoDialog> = ({ hasOpen, title, context, close, yes, no }) => {
  const onClose = () => {
    close();
  };

  const onSelectYes = () => {
    yes();
    close();
  };

  const onSelectNo = () => {
    no();
    close();
  };

  const buttonChildren = (
    <div className={styles.btnWrapper}>
      <Button onClick={onSelectNo}>No</Button>
      <Button onClick={onSelectYes}>Yes</Button>
    </div>
  );

  return (
    <div id={styles.container}>
      <BaseDialog
        hasOpen={hasOpen}
        onClose={onClose}
        buttonChildren={buttonChildren}
        title={title}
        areaLabeledby="dialog-selection"
      >
        <p>{context}</p>
      </BaseDialog>
    </div>
  );
};

export default YesNoDialog;
