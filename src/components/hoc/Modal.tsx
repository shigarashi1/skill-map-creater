import React, { useContext, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import BaseDialog from '../organisms/dialogs/BaseDialog/BaseDialog';
import { ModalContext } from './ModalProvider';

type TProps = {
  changedValues: (v: string[]) => void;
};

const ReactHooksSampleDialog: React.FC<TProps> = ({ changedValues }) => {
  const { hasOpened, close, selectedValues } = useContext(ModalContext);
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    setValues(selectedValues);
  }, [selectedValues]);

  const onClose = () => {
    close();
  };

  const onSubmit = () => {
    changedValues(values);
    close();
  };

  const onChecked = (v: string) => () => {
    if (values.includes(v)) {
      setValues(values.filter((vv) => vv !== v));
    } else {
      setValues([...values, v]);
    }
  };

  return (
    <div>
      <BaseDialog
        hasOpen={hasOpened}
        onClose={onClose}
        title="Sample"
        buttonChildren={
          <div>
            <Button onClick={onSubmit} variant="contained">
              OK
            </Button>
          </div>
        }
      >
        <React.Fragment>
          <Typography variant="h6" gutterBottom={true}>
            {['aaa', 'bbb', 'ccc', 'ddd', 'eee'].map((v, i) => (
              <Checkbox
                key={i}
                checked={values.includes(v)}
                onChange={onChecked(v)}
                value={v}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            ))}
          </Typography>
        </React.Fragment>
      </BaseDialog>
    </div>
  );
};

export default ReactHooksSampleDialog;
