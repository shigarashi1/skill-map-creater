import React from 'react';
import Button from '@material-ui/core/Button';

import styles from './ErrorDialog.module.scss';

import BaseDialog from '../BaseDialog/BaseDialog';
import { TError } from '../../../../types';

type TProps = {
  hasOpen: boolean;
  errors: TError[];
  clearError: () => void;
};

const ErrorDialog: React.FC<TProps> = ({ hasOpen, errors, clearError }) => {
  const onClose = () => {
    clearError();
  };

  const buttonChildren = (
    <div className={styles.btnWrapper}>
      <Button onClick={onClose}>Close</Button>
    </div>
  );

  return (
    <div id={styles.container}>
      <BaseDialog
        hasOpen={hasOpen}
        onClose={onClose}
        title="システムエラーが発生しました"
        areaLabeledby="dialog-error"
        buttonChildren={buttonChildren}
      >
        {errors.map((err, i) => (
          <p key={i}>
            {err.code}: {err.message}
          </p>
        ))}
      </BaseDialog>
    </div>
  );
};

export default ErrorDialog;
